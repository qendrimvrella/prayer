import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import Text from '../components/Text';
import fontWeights from '../constants/fontWeights';
import Layout from '../constants/Layout';
import Times from '../components/Times';

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
						fontFamily: fontWeights[300],
					}}>
					Kosovë, Prishtinë
				</Text>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 16,
						fontFamily: fontWeights[300],
					}}>
					07/03/2022
				</Text>
			</View>

			<View
				style={{
					marginTop: 130,
					marginBottom: 30,
				}}>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 24,
						fontFamily: fontWeights[300],
					}}>
					Ikindia 15:03
				</Text>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 56,
						fontFamily: fontWeights[500],
					}}>
					00:55:23
				</Text>
			</View>

			<Times
				activeTime="Ikindia"
				items={[
					{
						name: 'Imsaku',
						time: '04:55',
					},
					{
						name: 'Lindja Djellit',
						time: '04:55',
					},
					{
						name: 'Dreka',
						time: '11:50',
					},
					{
						name: 'Ikindia',
						time: '15:03',
					},
					{
						name: 'Akshami',
						time: '17:39',
					},
					{
						name: 'Jacia',
						time: '19:10',
					},
				]}
			/>
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
