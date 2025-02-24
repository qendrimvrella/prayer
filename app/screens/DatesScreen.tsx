import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ImportantDates from '../components/ImportantDates';
import NavBar from '../components/NavBar';
import { Text } from '../components/Themed';
import fontWeights from '../constants/fontWeights';
import { RootTabScreenProps } from '../types';
import useNotification from '../hooks/useNotification';
import Button from '../components/Button';

export default function DatesScreen({
	navigation,
}: RootTabScreenProps<'Dates'>) {
	const { schedulePushNotification } = useNotification();
	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 24,
					fontFamily: fontWeights[500],
					marginBottom: 40,
					paddingHorizontal: 24,
				}}>
				Datat me rëndësi
			</Text>

			<Button
				title="Trigger"
				onPress={() => {
					schedulePushNotification();
				}}
			/>
			<ImportantDates />

			<NavBar activeRoute="Dates" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 80,
	},
});
