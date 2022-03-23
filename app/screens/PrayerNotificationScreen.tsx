import * as React from 'react';
import { StyleSheet, Switch } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import fontWeights from '../constants/fontWeights';

export default function PrayerNotificationScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Njoftimet për kohët</Text>

			<View style={styles.item}>
				<View>
					<Text style={styles.itemTitle}>Sabahu</Text>
					<Text style={styles.itemText}>
						Aktivizo njoftimin e sabahut
					</Text>
				</View>
				<Switch
					value={false}
					trackColor={{ false: '#767577', true: Colors.primary }}
				/>
			</View>

			<View style={styles.item}>
				<View>
					<Text style={styles.itemTitle}>Dreka</Text>
					<Text style={styles.itemText}>
						Aktivizo njoftimin e drekës
					</Text>
				</View>
				<Switch
					value={false}
					trackColor={{ false: '#767577', true: Colors.primary }}
				/>
			</View>

			<View style={styles.item}>
				<View>
					<Text style={styles.itemTitle}>Ikindia</Text>
					<Text style={styles.itemText}>
						Aktivizo njoftimin e ikindia
					</Text>
				</View>
				<Switch
					value={false}
					trackColor={{ false: '#767577', true: Colors.primary }}
				/>
			</View>

			<View style={styles.item}>
				<View>
					<Text style={styles.itemTitle}>Akshami</Text>
					<Text style={styles.itemText}>
						Aktivizo njoftimin e akshami
					</Text>
				</View>
				<Switch
					value={false}
					trackColor={{ false: '#767577', true: Colors.primary }}
				/>
			</View>

			<View style={styles.item}>
				<View>
					<Text style={styles.itemTitle}>Jacia</Text>
					<Text style={styles.itemText}>
						Aktivizo njoftimin e jacia
					</Text>
				</View>
				<Switch
					value={false}
					trackColor={{ false: '#767577', true: Colors.primary }}
				/>
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
	title: {
		fontSize: 24,
		fontFamily: fontWeights[500],
		marginBottom: 40,
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
	},
	itemTitle: {
		fontSize: 18,
		marginBottom: 5,
	},
	itemText: {
		color: '#767676',
		fontSize: 12,
	},
});
