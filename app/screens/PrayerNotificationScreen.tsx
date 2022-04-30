import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import { Text, View } from '../components/Themed';
import fontWeights from '../constants/fontWeights';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import { RootStackScreenProps } from '../types';

export default function PrayerNotificationScreen({
	navigation,
}: RootStackScreenProps<'PrayerNotification'>) {
	const [isLoading, setIsLoading] = useState(false);
	const [times, setTimes] = useState({
		sabahu: true,
		dreka: true,
		ikindia: true,
		akshami: true,
		jacia: true,
	});

	useEffect(() => {
		(async () => {
			const prayersAS = await AsyncStorage.getItem('prayerNotification');
			if (prayersAS !== null) {
				setTimes(JSON.parse(prayersAS));
			}
		})();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Njoftimet për kohët</Text>

			<CustomSwitch
				title="Sabahu"
				subTitle="Aktivizo njoftimin e sabahut"
				value={times.sabahu}
				onValueChange={(val) =>
					setTimes((prev) => ({ ...prev, sabahu: val }))
				}
			/>

			<CustomSwitch
				title="Dreka"
				subTitle="Aktivizo njoftimin e drekës"
				value={times.dreka}
				onValueChange={(val) =>
					setTimes((prev) => ({ ...prev, dreka: val }))
				}
			/>

			<CustomSwitch
				title="Ikindia"
				subTitle="Aktivizo njoftimin e ikindia"
				value={times.ikindia}
				onValueChange={(val) =>
					setTimes((prev) => ({ ...prev, ikindia: val }))
				}
			/>

			<CustomSwitch
				title="Akshami"
				subTitle="Aktivizo njoftimin e akshami"
				value={times.akshami}
				onValueChange={(val) =>
					setTimes((prev) => ({ ...prev, akshami: val }))
				}
			/>

			<CustomSwitch
				title="Jacia"
				subTitle="Aktivizo njoftimin e jacia"
				value={times.jacia}
				onValueChange={(val) =>
					setTimes((prev) => ({ ...prev, jacia: val }))
				}
				style={{
					marginBottom: 36
				}}
			/>

			<Button
				title="Ruaj"
				isLoading={isLoading}
				onPress={async () => {
					setIsLoading(true);
					await AsyncStorage.setItem(
						'prayerNotification',
						JSON.stringify(times),
					);
					setIsLoading(false);
					navigation.goBack();
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 24,
		paddingHorizontal: 24,
	},
	title: {
		fontSize: 24,
		fontFamily: fontWeights[500],
		marginBottom: 40,
	},
});
