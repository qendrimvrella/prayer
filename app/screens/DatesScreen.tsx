import * as React from 'react';
import { StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function DatesScreen({
	navigation,
}: RootTabScreenProps<'Dates'>) {
	return (
		<View style={styles.container}>
			<Text>Dates</Text>
			<NavBar activeRoute="Dates" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D54E3A',
	},
});
