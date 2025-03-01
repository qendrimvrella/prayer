import * as React from 'react';
import { StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import fontWeights from '../constants/fontWeights';
import Colors from '../constants/Colors';

export default function AboutUsScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					source={require('../assets/images/icon.png')}
					style={styles.logo}
					resizeMode="contain"
				/>
				<Text style={styles.title}>Reth nesh</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Misioni ynë</Text>
				<Text style={styles.sectionText}>
					Ne synojmë të krijojmë një platformë të thjeshtë dhe të
					lehtë për përdorim që ndihmon përdoruesit ne faljen e
					namazit.
				</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Ekipi ynë</Text>
				<View style={styles.teamSection}>
					<View style={styles.teamMember}>
						<Ionicons
							name="code-outline"
							size={24}
							color={Colors.primary}
						/>
						<Text style={styles.teamRole}>Developers</Text>
						<Text style={styles.sectionText}>Q.V.</Text>
						<Text style={styles.sectionText}>B.M.</Text>
					</View>
					<View style={styles.teamMember}>
						<Ionicons
							name="color-palette-outline"
							size={24}
							color={Colors.primary}
						/>
						<Text style={styles.teamRole}>UI/UX Dizajner</Text>
						<Text style={styles.sectionText}>A.G.</Text>
					</View>
				</View>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Kontakti</Text>
				<TouchableOpacity style={styles.contactItem} onPress={() => {}}>
					<Ionicons
						name="mail-outline"
						size={20}
						color={Colors.primary}
					/>
					<Text style={[styles.sectionText, styles.contactText]}>
						info@thirrja.app
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.footer}>
				<Text style={styles.footerText}>
					© {new Date().getFullYear()} Thirrja App. Të gjitha të
					drejtat e rezervuara.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 24,
		paddingHorizontal: 24,
	},
	header: {
		alignItems: 'center',
		marginBottom: 40,
	},
	logo: {
		width: 100,
		height: 100,
		marginBottom: 16,
	},
	title: {
		fontSize: 28,
		fontFamily: fontWeights[700],
		marginBottom: 8,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 16,
		fontFamily: fontWeights[400],
		textAlign: 'center',
		color: '#666',
		paddingHorizontal: 20,
	},
	section: {
		marginBottom: 30,
	},
	sectionTitle: {
		fontSize: 20,
		fontFamily: fontWeights[500],
		marginBottom: 12,
		color: Colors.primary,
	},
	sectionText: {
		fontSize: 16,
		fontFamily: fontWeights[300],
		lineHeight: 22,
	},
	teamSection: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
	teamMember: {
		alignItems: 'center',
		padding: 16,
		minWidth: 120,
	},
	teamRole: {
		fontSize: 16,
		fontFamily: fontWeights[500],
		marginVertical: 8,
	},
	contactItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 12,
	},
	contactText: {
		marginLeft: 10,
		marginBottom: 0,
	},
	footer: {
		marginTop: 'auto',
		paddingVertical: 20,
		alignItems: 'center',
	},
	footerText: {
		fontSize: 14,
		color: '#999',
		fontFamily: fontWeights[300],
	},
});
