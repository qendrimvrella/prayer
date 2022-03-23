import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import fontWeights from '../constants/fontWeights';

export default function AboutUsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Reth nesh</Text>

			<Text style={styles.sectionTitle}>Developers</Text>
			<Text style={styles.sectionText}>Qëndrim Vrella</Text>

			<Text style={styles.sectionTitle}>UI/UX Dizajner</Text>
			<Text style={styles.sectionText}>Albesian Guri</Text>

			<Text style={styles.sectionTitle}>Kontakti</Text>
			<Text style={styles.sectionText}>zgjohu@gmail.com</Text>
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
	sectionTitle: {
		fontSize: 18,
		marginBottom: 8,
	},
	sectionText: {
		marginBottom: 40,
		fontSize: 16,
		fontFamily: fontWeights[300],
	},
});
