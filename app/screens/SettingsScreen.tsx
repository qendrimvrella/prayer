import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import fontWeights from '../constants/fontWeights';
import { RootTabScreenProps } from '../types';
import { Text } from '../components/Themed';
import Settings from '../components/Settings';

export default function SettingsScreen({
	navigation,
}: RootTabScreenProps<'Settings'>) {
	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 24,
					fontFamily: fontWeights[500],
					marginBottom: 40,
					paddingHorizontal: 24,
				}}>
				Cilësimet
			</Text>

			<Settings />

			<NavBar activeRoute="Settings" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 80,
	},
});
