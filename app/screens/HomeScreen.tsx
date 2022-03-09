import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	return (
		<LinearGradient
			style={styles.container}
			colors={['#D54E3A', '#EF9E4D']}>
			<View>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 18,
					}}>
					Kosovë, Prishtinë
				</Text>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 16,
					}}>
					07/03/2022
				</Text>
			</View>

			<View
				style={{
					marginTop: 130,
				}}>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 24,
					}}>
					Ikindia 15:03
				</Text>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 56,
					}}>
					00:55:23
				</Text>
			</View>

			<NavBar activeRoute="Home" />
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 80,
		paddingBottom: 120,
		alignItems: 'center',
		backgroundColor: '#759CDC',
	},
});
