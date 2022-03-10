import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import { PrayesType, RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import Text from '../components/Text';
import fontWeights from '../constants/fontWeights';
import Times from '../components/Times';
import prayers from '../constants/prayers';
import { useState } from 'react';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const [activePrayer, setActivePrayer] = useState<PrayesType>('imsaku');
	return (
		<LinearGradient
			style={styles.container}
			colors={[
				prayers[activePrayer].firstColor,
				prayers[activePrayer].secondColor,
			]}>
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
					10/03/2022
				</Text>
			</View>

			<View
				style={{
					marginTop: 130,
					marginBottom: 30,
				}}>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 24,
						fontFamily: fontWeights[300],
					}}>
					{prayers[activePrayer].name} 15:03
				</Text>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 56,
						fontFamily: fontWeights[500],
					}}>
					00:55:23
				</Text>
			</View>

			<Times
				activeTime={activePrayer}
				items={[
					{
						key: 'imsaku',
						name: 'Imsaku',
						time: '04:55',
						onPress: () => setActivePrayer('imsaku'),
					},
					{
						key: 'lindjaDjellit',
						name: 'Lindja Djellit',
						time: '04:55',
						onPress: () => setActivePrayer('lindjaDjellit'),
					},
					{
						key: 'dreka',
						name: 'Dreka',
						time: '11:50',
						onPress: () => setActivePrayer('dreka'),
					},
					{
						key: 'ikindia',
						name: 'Ikindia',
						time: '15:03',
						onPress: () => setActivePrayer('ikindia'),
					},
					{
						key: 'akshami',
						name: 'Akshami',
						time: '17:39',
						onPress: () => setActivePrayer('akshami'),
					},
					{
						key: 'jacia',
						name: 'Jacia',
						time: '19:10',
						onPress: () => setActivePrayer('jacia'),
					},
				]}
			/>
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
