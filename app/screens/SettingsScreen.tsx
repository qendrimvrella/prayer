import * as React from 'react';
import { StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SettingsScreen({
	navigation,
}: RootTabScreenProps<'Settings'>) {
	return (
		<View style={styles.container}>
			<Text>Settings</Text>
			<NavBar activeRoute="Settings" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
});
