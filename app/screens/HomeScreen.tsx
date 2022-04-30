import * as React from 'react';
import { StyleSheet, View } from 'react-native';
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
const homeDate = getFullDate();

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
	const {
		activePrayer,
		hoursTillPrayer,
		minutesTillPrayer,
		paryer,
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
					<Text style={styles.dateText}>{homeDate}</Text>
				</View>

				<View>
					<View style={styles.prayerTimeCon}>
						<Text style={styles.prayerTimeText}>
							{prayers[activePrayer].name} {paryer[activePrayer]}
						</Text>
						<Text style={styles.prayerTimeSubText}>
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
								key: 'lindjaDiellit',
								name: 'Lindja Diellit',
								time: paryer.lindjaDiellit,
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
		fontFamily: fontWeights[300],
		marginBottom: 8,
	},
	dateText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 16,
		fontFamily: fontWeights[300],
	},
	prayerTimeCon: {
		marginBottom: 16,
	},
	prayerTimeText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 24,
		fontFamily: fontWeights[300],
	},
	prayerTimeSubText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 56,
		fontFamily: fontWeights[500],
	},
});
