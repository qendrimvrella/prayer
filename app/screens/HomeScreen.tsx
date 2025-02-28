import * as React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import NavBar from '../components/NavBar';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import Text from '../components/Text';
import fontWeights from '../constants/fontWeights';
import Times from '../components/Times';
import Layout from '../constants/Layout';
import usePrayerTime from '../hooks/usePrayerTime';
import Colors from '../constants/Colors';
import { getFullDate } from '../helpers';
import Jacia from '../icons/Jacia';
import Akshami from '../icons/Akshami';
import Ikindia from '../icons/Ikindia';
import Dreka from '../icons/Dreka';
import LindjaDiellit from '../icons/LindjaDiellit';
import Imsaku from '../icons/Imsaku';
import useLocationHandler from '../hooks/useLocationHandler';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import HapticButton from '../components/HapticButton';

const prayers = {
	imsaku: {
		name: 'Imsaku',
		firstColor: '#043347',
		secondColor: '#5CA9CF',
		icon: () => <Imsaku />,
	},
	lindjaDiellit: {
		name: 'Lindja e Diellit',
		firstColor: '#5CA9CF',
		secondColor: '#FFCC6A',
		icon: () => <LindjaDiellit />,
	},
	dreka: {
		name: 'Dreka',
		firstColor: '#A4ECFF',
		secondColor: '#44C1E1',
		icon: () => <Dreka />,
	},
	ikindia: {
		name: 'Ikindia',
		firstColor: '#44C1E2',
		secondColor: '#FFC4AB',
		icon: () => <Ikindia />,
	},
	akshami: {
		name: 'Akshami',
		firstColor: '#EE8042',
		secondColor: '#F5C76D',
		icon: () => <Akshami />,
	},
	jacia: {
		name: 'Jacia',
		firstColor: '#193551',
		secondColor: '#0D1B26',
		icon: () => <Jacia />,
	},
};

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const [dateOffset, setDateOffset] = React.useState(0);
	const { activePrayer, hoursTillPrayer, minutesTillPrayer, prayer } =
		usePrayerTime(dateOffset);
	const { country, city } = useLocationHandler();

	// Get the date for display based on the current offset
	const displayDate = React.useMemo(() => {
		const date = dayjs().add(dateOffset, 'day');
		return getFullDate(date.toDate());
	}, [dateOffset]);

	// Handle navigation to previous day
	const goToPreviousDay = () => {
		setDateOffset((prev) => prev - 1);
	};

	// Handle navigation to next day
	const goToNextDay = () => {
		setDateOffset((prev) => prev + 1);
	};

	// Reset to current day
	const goToToday = () => {
		setDateOffset(0);
	};

	return (
		<LinearGradient
			style={styles.container}
			colors={[
				prayers[activePrayer].firstColor,
				prayers[activePrayer].secondColor,
			]}>
			<View
				style={{
					position: 'absolute',
				}}>
				{prayers[activePrayer].icon()}
			</View>
			<View style={styles.wrapper}>
				<View>
					<Text style={styles.locationText}>
						{country}, {city}
					</Text>

					<View style={styles.dateContainer}>
						<HapticButton
							onPress={goToPreviousDay}
							style={styles.arrowButton}>
							<Ionicons
								name="chevron-back"
								size={24}
								color="#fff"
							/>
						</HapticButton>

						<HapticButton onPress={goToToday}>
							<Text style={styles.dateText}>{displayDate}</Text>
							{dateOffset !== 0 && (
								<Text style={styles.todayText}>
									Shtyp për tu kthyer te dita e sotme
								</Text>
							)}
						</HapticButton>

						<HapticButton
							onPress={goToNextDay}
							style={styles.arrowButton}>
							<Ionicons
								name="chevron-forward"
								size={24}
								color="#fff"
							/>
						</HapticButton>
					</View>
				</View>

				<View>
					<View style={styles.prayerTimeCon}>
						{dateOffset === 0 ? (
							<>
								<Text style={styles.prayerTimeText}>
									{prayers[activePrayer].name}{' '}
									{prayer[activePrayer]}
								</Text>
								<Text style={styles.prayerTimeSubText}>
									{hoursTillPrayer > 0
										? `${hoursTillPrayer}h `
										: null}
									{minutesTillPrayer > 0
										? `${minutesTillPrayer}m`
										: '0m'}
								</Text>
							</>
						) : null}
					</View>

					<Times
						activeTime={dateOffset === 0 ? activePrayer : ''}
						items={[
							{
								key: 'imsaku',
								name: 'Imsaku',
								time: prayer.imsaku,
							},
							{
								key: 'lindjaDiellit',
								name: 'Lindja Diellit',
								time: prayer.lindjaDiellit,
							},
							{
								key: 'dreka',
								name: 'Dreka',
								time: prayer.dreka,
							},
							{
								key: 'ikindia',
								name: 'Ikindia',
								time: prayer.ikindia,
							},
							{
								key: 'akshami',
								name: 'Akshami',
								time: prayer.akshami,
							},
							{
								key: 'jacia',
								name: 'Jacia',
								time: prayer.jacia,
							},
						]}
					/>
				</View>
			</View>

			<NavBar activeRoute="Home" />
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 65,
		alignItems: 'center',
		backgroundColor: Colors.primary,
	},
	wrapper: {
		justifyContent: 'space-between',
		height: Layout.window.height - 165,
	},
	locationText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 18,
		fontFamily: fontWeights[400],
		marginBottom: 8,
	},
	dateContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 8,
	},
	dateText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 16,
		fontFamily: fontWeights[400],
	},
	todayText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 12,
		fontFamily: fontWeights[400],
		opacity: 0.8,
		marginTop: 4,
	},
	arrowButton: {
		paddingHorizontal: 15,
	},
	prayerTimeCon: {
		marginBottom: 16,
	},
	prayerTimeText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 24,
		fontFamily: fontWeights[400],
	},
	prayerTimeSubText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 56,
		fontFamily: fontWeights[500],
	},
	dateViewText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
		fontFamily: fontWeights[400],
		marginBottom: 16,
	},
});
