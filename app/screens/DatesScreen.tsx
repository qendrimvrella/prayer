import { StyleSheet, View } from 'react-native';
import ImportantDates from '../components/ImportantDates';
import NavBar from '../components/NavBar';
import { Text } from '../components/Themed';
import fontWeights from '../constants/fontWeights';

export default function DatesScreen() {
	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 24,
					fontFamily: fontWeights[500],
					marginBottom: 40,
					paddingHorizontal: 24,
				}}>
				Datat e rëndësishme
			</Text>

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
