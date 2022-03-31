import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, View, StyleSheet, Switch } from 'react-native';
import Colors from '../constants/Colors';
import fontWeights from '../constants/fontWeights';
import locations from '../constants/locations';
import useLocationHandler from '../hooks/useLocationHandler';
import useSettingsHandler from '../hooks/useSettingsHandler';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import InfoIcon from '../icons/InfoIcon';
import SelectModal from './SelectModal';
import { Text } from './Themed';

const Settings = () => {
	const navigation = useNavigation();
	const { isNotificationActive, onNotificationClick } = useSettingsHandler();
	const { country, city, onCountryChange, onCityChange } =
		useLocationHandler();

	const [countryModalVisibility, setCountryModalVisibility] = useState(false);
	const [cityModalVisibility, setCityModalVisibility] = useState(false);

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.settingTitle}>Lokacioni</Text>
				<Pressable
					onPress={() => setCountryModalVisibility(true)}
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingVertical: 8,
					}}>
					<Text style={styles.settingText}>Shteti</Text>
					<Text style={styles.settingLocation}>{country}</Text>
				</Pressable>

				<Pressable
					onPress={() => setCityModalVisibility(true)}
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingVertical: 8,
					}}>
					<Text style={styles.settingText}>Qyteti</Text>
					<Text style={styles.settingLocation}>
						{city != '' ? city : 'Zgjidhni'}
					</Text>
				</Pressable>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 38,
						marginBottom: 12,
					}}>
					<View>
						<Text
							style={{
								fontSize: 18,
								marginBottom: 5,
							}}>
							Njoftimet
						</Text>
						<Text
							style={{
								color: '#767676',
								fontSize: 12,
							}}>
							Aktivizo të gjitha njoftimet
						</Text>
					</View>
					<Switch
						value={isNotificationActive}
						onValueChange={onNotificationClick}
						trackColor={{ false: '#767577', true: Colors.primary }}
					/>
				</View>

				{isNotificationActive && (
					<>
						<Pressable
							onPress={() =>
								navigation.navigate('PrayerNotification')
							}
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								paddingRight: 5,
								paddingVertical: 14,
							}}>
							<Text style={styles.settingText}>
								Njoftimet për kohët
							</Text>
							<ArrowRightIcon />
						</Pressable>

						<Pressable
							onPress={() => navigation.navigate('BeforePrayer')}
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								paddingRight: 5,
								paddingVertical: 14,
							}}>
							<Text style={styles.settingText}>
								Para-njoftimet
							</Text>
							<ArrowRightIcon />
						</Pressable>
					</>
				)}

				<Pressable
					onPress={() => navigation.navigate('AboutUs')}
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: 32,
					}}>
					<InfoIcon />
					<Text
						style={{
							color: Colors.primary,
							fontSize: 16,
							marginLeft: 8,
						}}>
						Rreth nesh
					</Text>
				</Pressable>
			</View>
			<SelectModal
				title="Shteti"
				modalVisible={countryModalVisibility}
				onClose={() => setCountryModalVisibility(false)}
				modalHeight={320}
				value={country}
				onPress={onCountryChange}
				items={Object.keys(locations)}
			/>
			<SelectModal
				title="Qyteti"
				modalVisible={cityModalVisibility}
				onClose={() => setCityModalVisibility(false)}
				modalHeight={580}
				value={city}
				onPress={onCityChange}
				items={Object.keys(locations[country])}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
	},
	settingTitle: {
		fontSize: 18,
		marginBottom: 12,
	},
	settingText: {
		fontSize: 16,
		fontFamily: fontWeights[300],
	},
	settingLocation: {
		color: '#A3A3A3',
		fontSize: 16,
		fontFamily: fontWeights[300],
	},
});

export default Settings;
