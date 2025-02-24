import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Button from '../components/Button';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomSwitch from '../components/CustomSwitch';
import SelectModal from '../components/SelectModal';
import { Text, View } from '../components/Themed';
import fontWeights from '../constants/fontWeights';
import { RootStackScreenProps } from '../types';

export default function BeforePrayerScreen({
	navigation,
}: RootStackScreenProps<'BeforePrayer'>) {
	const [isLoading, setIsLoading] = useState(false);
	const [beforeNotification, setBeforeNotification] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [beforePrayers, setBeforePrayers] = useState({
		sabahu: 0,
		dreka: 0,
		ikindia: 0,
		akshami: 0,
		jacia: 0,
	});
	const [activeBeforePrayer, setActiveBeforePrayer] =
		useState<keyof typeof beforePrayers>('sabahu');

	useEffect(() => {
		(async () => {
			const prayersAS = await AsyncStorage.getItem(
				'beforePrayerNotification',
			);
			if (prayersAS !== null) {
				setBeforePrayers(JSON.parse(prayersAS));
			}
			const beforeNotificationAS = await AsyncStorage.getItem(
				'isBeforePrayerNotificationActive',
			);
			if (beforeNotificationAS !== null) {
				setBeforeNotification(JSON.parse(beforeNotificationAS));
			}
		})();
	}, []);

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.title}>Para-njoftimet</Text>

				<CustomSwitch
					title="Aktivizo para-njoftimet"
					subTitle="Shfaq njoftimet për afrimin e kohëve të namazit"
					value={beforeNotification}
					onValueChange={(val) => setBeforeNotification(val)}
				/>

				<CustomButton
					title="Sabahu"
					subTitle="Zgjedh sa minuta pas sabahut dëshironi të njoftoheni"
					onPress={() => {
						setActiveBeforePrayer('sabahu');
						setModalVisible(true);
					}}
				/>
				<CustomButton
					title="Dreka"
					subTitle="Zgjedh sa minuta para drekës dëshironi të njoftoheni"
					onPress={() => {
						setActiveBeforePrayer('dreka');
						setModalVisible(true);
					}}
				/>
				<CustomButton
					title="Ikindia"
					subTitle="Zgjedh sa minuta para ikindisë dëshironi të njoftoheni"
					onPress={() => {
						setActiveBeforePrayer('ikindia');
						setModalVisible(true);
					}}
				/>
				<CustomButton
					title="Akshami"
					subTitle="Zgjedh sa minuta para akshamit dëshironi të njoftoheni"
					onPress={() => {
						setActiveBeforePrayer('akshami');
						setModalVisible(true);
					}}
				/>
				<CustomButton
					title="Jacia"
					subTitle="Zgjedh sa minuta para jacisë dëshironi të njoftoheni"
					onPress={() => {
						setActiveBeforePrayer('jacia');
						setModalVisible(true);
					}}
					style={{
						marginBottom: 24,
					}}
				/>
				<Button
					title="Ruaj"
					isLoading={isLoading}
					onPress={async () => {
						setIsLoading(true);
						await AsyncStorage.setItem(
							'beforePrayerNotification',
							JSON.stringify(beforePrayers),
						);
						await AsyncStorage.setItem(
							'isBeforePrayerNotificationActive',
							JSON.stringify(beforeNotification),
						);
						setIsLoading(false);
						navigation.goBack();
					}}
				/>
			</View>
			<SelectModal
				title="Cakto kohen"
				modalVisible={modalVisible}
				onClose={() => setModalVisible(false)}
				modalHeight={550}
				value={String(beforePrayers[activeBeforePrayer])}
				onPress={(val) => {
					setBeforePrayers((prev) => ({
						...prev,
						[activeBeforePrayer]: parseInt(val),
					}));
				}}
				items={['0', '5', '10', '15', '20', '25', '30']}
			/>
		</>
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
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
	},
	itemTitle: {
		fontSize: 18,
		marginBottom: 5,
	},
	itemText: {
		color: '#767676',
		fontSize: 12,
	},
});
