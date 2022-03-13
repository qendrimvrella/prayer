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
import dayjs from 'dayjs';
import usePrayerTime from '../hooks/usePrayerTime';
const homeDate = dayjs().format('DD/MM/YYYY');

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const { activePrayer, hoursTillPrayer, minutesTillPrayer, time } =
		usePrayerTime();

	return (
		<LinearGradient
			style={styles.container}
			colors={[
				prayers[activePrayer].firstColor,
				prayers[activePrayer].secondColor,
			]}>
			<View
				style={{
					justifyContent: 'space-between',
					height: Layout.window.height - 210,
				}}>
				<View>
					<Text
						style={{
							color: '#fff',
							textAlign: 'center',
							fontSize: 18,
							fontFamily: fontWeights[300],
						}}>
						Kosovë, Ferizaj
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

					{time.festaFetar != '' && (
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
								{time.festaFetar}
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
							{prayers[activePrayer].name} {time[activePrayer]}
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
								time: time['ks'].imsaku,
							},
							{
								key: 'lindjaDjellit',
								name: 'Lindja Djellit',
								time: time['ks'].lindjaDjellit,
							},
							{
								key: 'dreka',
								name: 'Dreka',
								time: time['ks'].dreka,
							},
							{
								key: 'ikindia',
								name: 'Ikindia',
								time: time['ks'].ikindia,
							},
							{
								key: 'akshami',
								name: 'Akshami',
								time: time['ks'].akshami,
							},
							{
								key: 'jacia',
								name: 'Jacia',
								time: time['ks'].jacia,
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
		paddingBottom: 120,
		alignItems: 'center',
		backgroundColor: '#759CDC',
	},
});
