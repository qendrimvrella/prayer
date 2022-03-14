import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import Text from '../components/Text';
import fontWeights from '../constants/fontWeights';
import Times from '../components/Times';
import prayers from '../constants/prayers';
import Layout from '../constants/Layout';
import usePrayerTime from '../hooks/usePrayerTime';
import LottieView from 'lottie-react-native';
import Colors from '../constants/Colors';
import { getFullDate } from '../helpers';
const homeDate = getFullDate();

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const {
		activePrayer,
		hoursTillPrayer,
		minutesTillPrayer,
		paryer,
		festaFetar,
		country,
		city,
	} = usePrayerTime();

	return (
		<LinearGradient
			style={styles.container}
			colors={[
				prayers[activePrayer].firstColor,
				prayers[activePrayer].secondColor,
			]}>
			{/* <LottieView
				loop
				autoPlay={true}
				speed={0.4}
				style={{
					position: 'absolute',
					marginTop: 30,
					width: 200,
					height: 200,
				}}
				source={require('../lottie/sun.json')}
			/> */}
			<View
				style={{
					justifyContent: 'space-between',
					height: Layout.window.height - 190,
				}}>
				<View>
					<Text
						style={{
							color: '#fff',
							textAlign: 'center',
							fontSize: 18,
							fontFamily: fontWeights[300],
						}}>
						{country}, {city}
					</Text>
					<Text
						style={{
							color: '#fff',
							textAlign: 'center',
							fontSize: 16,
							fontFamily: fontWeights[300],
						}}>
						{homeDate}
					</Text>

					{festaFetar != '' && (
						<View
							style={{
								backgroundColor: '#759CDC22',
								justifyContent: 'center',
								alignItems: 'center',
								width: Layout.window.width - 24 * 2,
								height: 48,
								paddingHorizontal: 16,
								borderRadius: 8,
								marginTop: 30,
							}}>
							<Text
								style={{
									color: '#fff',
								}}>
								{festaFetar}
							</Text>
						</View>
					)}
				</View>

				<View>
					<View
						style={{
							marginBottom: 40,
						}}>
						<Text
							style={{
								color: '#fff',
								textAlign: 'center',
								fontSize: 24,
								fontFamily: fontWeights[300],
							}}>
							{prayers[activePrayer].name} {paryer[activePrayer]}
						</Text>
						<Text
							style={{
								color: '#fff',
								textAlign: 'center',
								fontSize: 56,
								fontFamily: fontWeights[500],
							}}>
							{hoursTillPrayer > 0
								? `${hoursTillPrayer}h `
								: null}
							{minutesTillPrayer > 0
								? `${minutesTillPrayer}m`
								: '0m'}
						</Text>
					</View>

					<Times
						activeTime={activePrayer}
						items={[
							{
								key: 'imsaku',
								name: 'Imsaku',
								time: paryer.imsaku,
							},
							{
								key: 'lindjaDjellit',
								name: 'Lindja Djellit',
								time: paryer.lindjaDjellit,
							},
							{
								key: 'dreka',
								name: 'Dreka',
								time: paryer.dreka,
							},
							{
								key: 'ikindia',
								name: 'Ikindia',
								time: paryer.ikindia,
							},
							{
								key: 'akshami',
								name: 'Akshami',
								time: paryer.akshami,
							},
							{
								key: 'jacia',
								name: 'Jacia',
								time: paryer.jacia,
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
		paddingTop: 80,
		alignItems: 'center',
		backgroundColor: Colors.primary,
	},
});
