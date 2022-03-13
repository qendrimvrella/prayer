import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Colors from '../constants/Colors';
import locations from '../constants/locations';
import useLocationHandler from '../hooks/useLocationHandler';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import InfoIcon from '../icons/InfoIcon';
import LocationIcon from '../icons/LocationIcon';
import NotificationIcon from '../icons/NotificationIcon';
import CheckBox from './CheckBox';
import SelectModal from './SelectModal';
import { Text } from './Themed';

const Settings = () => {
	const navigation = useNavigation();
	const [countryModalVisibility, setCountryModalVisibility] = useState(false);
	const [cityModalVisibility, setCityModalVisibility] = useState(false);
	const { country, city, onCountryChange, onCityChange } =
		useLocationHandler();

	return (
		<>
			<View
				style={{
					paddingHorizontal: 24,
				}}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginBottom: 12,
					}}>
					<LocationIcon />
					<Text
						style={{
							color: Colors.primary,
							fontSize: 16,
							marginLeft: 12,
						}}>
						Lokacioni
					</Text>
				</View>
				<Pressable
					onPress={() => setCountryModalVisibility(true)}
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingVertical: 8,
					}}>
					<Text>Shteti</Text>
					<Text
						style={{
							color: '#A3A3A3',
						}}>
						{country}
					</Text>
				</Pressable>

				<Pressable
					onPress={() => setCityModalVisibility(true)}
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingVertical: 8,
					}}>
					<Text>Qyteti</Text>
					<Text
						style={{
							color: '#A3A3A3',
						}}>
						{city}
					</Text>
				</Pressable>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginBottom: 12,
						marginTop: 16,
					}}>
					<NotificationIcon />
					<Text
						style={{
							color: Colors.primary,
							fontSize: 16,
							marginLeft: 12,
						}}>
						Njoftimet
					</Text>
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingVertical: 8,
					}}>
					<Text>Aktivizo njoftimet</Text>
					<CheckBox isActive={true} />
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingVertical: 8,
					}}>
					<Text>Njoftimet me zë</Text>
					<CheckBox isActive={false} />
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingVertical: 8,
					}}>
					<Text>Vibrimi</Text>
					<CheckBox isActive={true} />
				</View>

				<Pressable
					onPress={() => navigation.navigate('Modal')}
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingRight: 5,
						paddingVertical: 8,
					}}>
					<Text>Para-njoftimet</Text>
					<ArrowRightIcon />
				</Pressable>

				<Pressable
					onPress={() => navigation.navigate('AboutUs')}
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: 16,
					}}>
					<InfoIcon />
					<Text
						style={{
							color: Colors.primary,
							fontSize: 16,
							marginLeft: 12,
						}}>
						Rreth nesh
					</Text>
				</Pressable>
			</View>
			<SelectModal
				modalVisible={countryModalVisibility}
				onClose={() => setCountryModalVisibility(false)}
				modalHeight={320}
				value={country}
				onPress={onCountryChange}
				items={Object.keys(locations)}
			/>
			<SelectModal
				modalVisible={cityModalVisibility}
				onClose={() => setCityModalVisibility(false)}
				modalHeight={540}
				value={city}
				onPress={onCityChange}
				items={Object.keys(locations.Kosovë)}
			/>
		</>
	);
};

export default Settings;
