import * as React from 'react';
import {
	StyleSheet,
	View,
	Platform,
	Animated,
	Easing,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';
import { Text } from '../components/Themed';
import NavBar from '../components/NavBar';
import fontWeights from '../constants/fontWeights';
import Svg, { Path, Circle, Text as SvgText, G } from 'react-native-svg';

const MECCA_LAT = 21.3891;
const MECCA_LON = 39.8579;

const toRad = (deg: number) => (deg * Math.PI) / 180;
const toDeg = (rad: number) => (rad * 180) / Math.PI;

function calculateQiblaBearing(lat1: number, lon1: number): number {
	const φ1 = toRad(lat1);
	const φ2 = toRad(MECCA_LAT);
	const Δλ = toRad(MECCA_LON - lon1);
	const y = Math.sin(Δλ) * Math.cos(φ2);
	const x =
		Math.cos(φ1) * Math.sin(φ2) -
		Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
	return (toDeg(Math.atan2(y, x)) + 360) % 360;
}
const COMPASS_SIZE = 260;
const CENTER = COMPASS_SIZE / 2;
const RADIUS = CENTER - 16;

function CompassRing() {
	const cardinals = [
		{ label: 'V', angle: 0 },
		{ label: 'L', angle: 90 },
		{ label: 'J', angle: 180 },
		{ label: 'P', angle: 270 },
	];

	const ticks = Array.from({ length: 72 }, (_, i) => i * 5);

	return (
		<Svg width={COMPASS_SIZE} height={COMPASS_SIZE}>
			<Circle
				cx={CENTER}
				cy={CENTER}
				r={RADIUS}
				stroke="rgba(255,255,255,0.15)"
				strokeWidth={1.5}
				fill="rgba(10,30,60,0.55)"
			/>
			<Circle
				cx={CENTER}
				cy={CENTER}
				r={RADIUS - 18}
				stroke="rgba(255,255,255,0.08)"
				strokeWidth={1}
				fill="none"
			/>

			{ticks.map((angle) => {
				const rad = toRad(angle - 90);
				const isMajor = angle % 90 === 0;
				const isSemi = angle % 45 === 0 && !isMajor;
				const outerR = RADIUS - 4;
				const innerR = isMajor
					? outerR - 14
					: isSemi
						? outerR - 10
						: outerR - 6;
				return (
					<Path
						key={angle}
						d={`M ${CENTER + outerR * Math.cos(rad)} ${
							CENTER + outerR * Math.sin(rad)
						} L ${CENTER + innerR * Math.cos(rad)} ${
							CENTER + innerR * Math.sin(rad)
						}`}
						stroke={
							isMajor
								? 'rgba(255,255,255,0.9)'
								: 'rgba(255,255,255,0.35)'
						}
						strokeWidth={isMajor ? 2 : 1}
					/>
				);
			})}

			{cardinals.map(({ label, angle }) => {
				const rad = toRad(angle - 90);
				const r = RADIUS - 30;
				const x = CENTER + r * Math.cos(rad);
				const y = CENTER + r * Math.sin(rad) + 5;
				return (
					<SvgText
						key={label}
						x={x}
						y={y}
						textAnchor="middle"
						fill={
							label === 'V' ? '#FFCC6A' : 'rgba(255,255,255,0.85)'
						}
						fontSize={label === 'V' ? 14 : 12}
						fontWeight="bold">
						{label}
					</SvgText>
				);
			})}
		</Svg>
	);
}

function QiblaArrow({ rotation }: { rotation: Animated.Value }) {
	const ARROW_SIZE = COMPASS_SIZE;
	const AC = ARROW_SIZE / 2;

	return (
		<Animated.View
			style={{
				position: 'absolute',
				width: ARROW_SIZE,
				height: ARROW_SIZE,
				transform: [
					{
						rotate: rotation.interpolate({
							inputRange: [-36000, 36000],
							outputRange: ['-36000deg', '36000deg'],
						}),
					},
				],
			}}>
			<Svg width={ARROW_SIZE} height={ARROW_SIZE}>
				<G>
					<Path
						d={`M ${AC} ${AC - RADIUS + 20} L ${AC - 10} ${AC + 20} L ${AC} ${AC + 8} L ${AC + 10} ${AC + 20} Z`}
						fill="#FFCC6A"
						opacity={0.95}
					/>
					<Path
						d={`M ${AC} ${AC + 10} L ${AC - 8} ${AC + RADIUS - 22} L ${AC} ${AC + RADIUS - 28} L ${AC + 8} ${AC + RADIUS - 22} Z`}
						fill="rgba(255,255,255,0.3)"
					/>
					<Circle cx={AC} cy={AC} r={6} fill="#FFCC6A" />
					<Circle cx={AC} cy={AC} r={3} fill="#193551" />
				</G>
			</Svg>
		</Animated.View>
	);
}

type LocationState =
	| { status: 'idle' }
	| { status: 'loading' }
	| { status: 'granted'; lat: number; lon: number }
	| { status: 'denied' };

export default function KiblaScreen() {
	const [locationState, setLocationState] = React.useState<LocationState>({
		status: 'idle',
	});
	const [compassHeading, setCompassHeading] = React.useState(0);
	const rotationAnim = React.useRef(new Animated.Value(0)).current;
	// Tracks the last raw target (qiblaBearing - compassHeading) without wrapping,
	// so animations always take the shortest path and never spin the wrong way.
	const lastTarget = React.useRef(0);

	const coords =
		locationState.status === 'granted'
			? { lat: locationState.lat, lon: locationState.lon }
			: null;

	const qiblaBearing = coords
		? calculateQiblaBearing(coords.lat, coords.lon)
		: null;

	const requestLocation = React.useCallback(async () => {
		setLocationState({ status: 'loading' });
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setLocationState({ status: 'denied' });
			return;
		}
		const pos = await Location.getCurrentPositionAsync({
			accuracy: Location.Accuracy.Balanced,
		});
		setLocationState({
			status: 'granted',
			lat: pos.coords.latitude,
			lon: pos.coords.longitude,
		});
	}, []);

	React.useEffect(() => {
		requestLocation();
	}, []);

	// Start the heading watcher only while this screen is focused.
	// Automatically removed when navigating away, saving battery and CPU.
	useFocusEffect(
		React.useCallback(() => {
			let sub: Location.LocationSubscription | null = null;
			let cancelled = false;

			Location.requestForegroundPermissionsAsync().then(({ status }) => {
				if (status !== 'granted' || cancelled) return;
				Location.watchHeadingAsync((h) => {
					setCompassHeading(h.magHeading);
				}).then((s) => {
					if (cancelled) {
						s.remove();
					} else {
						sub = s;
					}
				});
			});

			return () => {
				cancelled = true;
				sub?.remove();
			};
		}, []),
	);

	// Animate the arrow, always taking the shortest angular path.
	React.useEffect(() => {
		if (qiblaBearing === null) return;

		const raw = qiblaBearing - compassHeading;
		// Shortest-path delta so the arrow never spins 350° instead of 10°.
		let delta = raw - lastTarget.current;
		delta = ((((delta + 180) % 360) + 360) % 360) - 180;
		lastTarget.current += delta;

		Animated.timing(rotationAnim, {
			toValue: lastTarget.current,
			duration: 300,
			easing: Easing.out(Easing.quad),
			useNativeDriver: true,
		}).start();
	}, [compassHeading, qiblaBearing]);

	const renderSubtitle = () => {
		if (locationState.status === 'granted') {
			return `${locationState.lat.toFixed(4)}°, ${locationState.lon.toFixed(4)}°`;
		}
		return 'Vendndodhja juaj';
	};

	if (locationState.status === 'idle' || locationState.status === 'loading') {
		return (
			<LinearGradient
				style={styles.container}
				colors={['#043347', '#0D1B26']}>
				<View style={styles.centerState}>
					<ActivityIndicator size="large" color="#FFCC6A" />
					<Text style={styles.stateText}>
						Duke marrë vendndodhjen…
					</Text>
				</View>
				<NavBar activeRoute="Kibla" />
			</LinearGradient>
		);
	}

	if (locationState.status === 'denied') {
		return (
			<LinearGradient
				style={styles.container}
				colors={['#043347', '#0D1B26']}>
				<View style={styles.centerState}>
					<Text style={styles.permissionIcon}>📍</Text>
					<Text style={styles.stateTitle}>Kërkohet vendndodhja</Text>
					<Text style={styles.stateBody}>
						Për të gjetur drejtimin e Kiblës, na duhet vendndodhja
						juaj e saktë.
					</Text>
					<TouchableOpacity
						style={styles.allowButton}
						onPress={requestLocation}>
						<Text style={styles.allowButtonText}>Lejo qasjen</Text>
					</TouchableOpacity>
				</View>
				<NavBar activeRoute="Kibla" />
			</LinearGradient>
		);
	}

	return (
		<LinearGradient
			style={styles.container}
			colors={['#043347', '#0D1B26']}>
			<View style={styles.header}>
				<Text style={styles.title}>Kibla</Text>
				<Text style={styles.subtitle}>{renderSubtitle()}</Text>
			</View>

			<View style={styles.compassWrapper}>
				<View style={styles.compassContainer}>
					<CompassRing />
					<QiblaArrow rotation={rotationAnim} />
					<View style={styles.kaabaLabel}>
						<Text style={styles.kaabaText}>🕋</Text>
					</View>
				</View>

				<View style={styles.directionBadge}>
					<Text style={styles.directionDeg}>
						{qiblaBearing !== null
							? `${Math.round(qiblaBearing)}°`
							: '—'}
					</Text>
					<Text style={styles.directionLabel}>Drejtimi i Kiblës</Text>
				</View>
			</View>

			<View style={styles.infoRow}>
				<Text style={styles.infoHint}>📱</Text>
				<Text style={styles.infoHintText}>
					Mbaje telefonin shtrirë horizontalisht dhe lëvize ngadalë
					deri sa shigjeta të stabilizohet.
				</Text>
			</View>

			<NavBar activeRoute="Kibla" />
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'ios' ? 65 : 55,
		alignItems: 'center',
	},
	centerState: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 40,
		paddingBottom: 90,
	},
	permissionIcon: {
		fontSize: 52,
		marginBottom: 20,
	},
	stateTitle: {
		color: '#fff',
		fontSize: 22,
		fontFamily: fontWeights[500],
		textAlign: 'center',
		marginBottom: 12,
	},
	stateBody: {
		color: 'rgba(255,255,255,0.6)',
		fontSize: 15,
		fontFamily: fontWeights[400],
		textAlign: 'center',
		lineHeight: 22,
		marginBottom: 32,
	},
	stateText: {
		color: 'rgba(255,255,255,0.6)',
		fontSize: 15,
		fontFamily: fontWeights[400],
		marginTop: 16,
	},
	allowButton: {
		backgroundColor: '#FFCC6A',
		paddingHorizontal: 36,
		paddingVertical: 14,
		borderRadius: 50,
	},
	allowButtonText: {
		color: '#0D1B26',
		fontSize: 16,
		fontFamily: fontWeights[500],
	},
	header: {
		alignItems: 'center',
		marginBottom: 32,
	},
	title: {
		color: '#fff',
		fontSize: 28,
		fontFamily: fontWeights[500],
		letterSpacing: 2,
	},
	subtitle: {
		color: 'rgba(255,255,255,0.6)',
		fontSize: 14,
		fontFamily: fontWeights[400],
		marginTop: 4,
	},
	compassWrapper: {
		alignItems: 'center',
	},
	compassContainer: {
		width: COMPASS_SIZE,
		height: COMPASS_SIZE,
		alignItems: 'center',
		justifyContent: 'center',
	},
	kaabaLabel: {
		position: 'absolute',
	},
	kaabaText: {
		fontSize: 22,
	},
	directionBadge: {
		marginTop: 24,
		alignItems: 'center',
	},
	directionDeg: {
		color: '#FFCC6A',
		fontSize: 42,
		fontFamily: fontWeights[500],
		lineHeight: 46,
	},
	directionLabel: {
		color: 'rgba(255,255,255,0.55)',
		fontSize: 13,
		fontFamily: fontWeights[400],
		marginTop: 4,
		letterSpacing: 0.5,
	},
	infoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 32,
		backgroundColor: 'rgba(255,255,255,0.07)',
		borderRadius: 20,
		paddingVertical: 16,
		paddingHorizontal: 20,
		maxWidth: 300,
		gap: 12,
	},
	infoHint: {
		fontSize: 24,
	},
	infoHintText: {
		color: 'rgba(255,255,255,0.55)',
		fontSize: 13,
		fontFamily: fontWeights[400],
		lineHeight: 19,
		flex: 1,
	},
	permissionWarning: {
		marginTop: 16,
		paddingHorizontal: 32,
	},
	permissionText: {
		color: 'rgba(255,200,100,0.85)',
		textAlign: 'center',
		fontSize: 13,
		fontFamily: fontWeights[400],
	},
});
