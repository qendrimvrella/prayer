import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import fontWeights from '../constants/fontWeights';

export default function AboutUsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Reth nesh</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    paddingTop: 24,
	},
	title: {
		fontSize: 24,
		fontFamily: fontWeights[500],
		marginBottom: 40,
		paddingHorizontal: 24,
	},
});
