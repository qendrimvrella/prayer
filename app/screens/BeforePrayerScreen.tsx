import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Button from '../components/Button';
import CustomButton from '../components/CustomButton';
import CustomSwitch from '../components/CustomSwitch';
import SelectModal from '../components/SelectModal';
import { Text, View } from '../components/Themed';
import fontWeights from '../constants/fontWeights';

export default function BeforePrayerScreen() {
	const [isLoading, setIsLoading] = useState(false);
	const [beforeNotification, setBeforeNotification] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

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
					onPress={() => setModalVisible(true)}
				/>
				<CustomButton
					title="Dreka"
					subTitle="Zgjedh sa minuta para drekës dëshironi të njoftoheni"
					onPress={() => setModalVisible(true)}
				/>
				<CustomButton
					title="Ikindia"
					subTitle="Zgjedh sa minuta para ikindisë dëshironi të njoftoheni"
					onPress={() => setModalVisible(true)}
				/>
				<CustomButton
					title="Akshami"
					subTitle="Zgjedh sa minuta para akshamit dëshironi të njoftoheni"
					onPress={() => setModalVisible(true)}
				/>
				<CustomButton
					title="Jacia"
					subTitle="Zgjedh sa minuta para jacisë dëshironi të njoftoheni"
					onPress={() => setModalVisible(true)}
				/>
				<Button
					title="Ruaj"
					isLoading={isLoading}
					onPress={async () => {
						setIsLoading(true);
					}}
				/>
			</View>
			<SelectModal
				title="Cakto kohen"
				modalVisible={modalVisible}
				onClose={() => setModalVisible(false)}
				modalHeight={450}
				value={'10'}
				onPress={() => {}}
				items={['5', '10', '15', '20', '25', '30']}
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
