import React from 'react';
import { View } from 'react-native';
import Colors from '../constants/Colors';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import GlobeIcon from '../icons/GlobeIcon';
import InfoIcon from '../icons/InfoIcon';
import LocationIcon from '../icons/LocationIcon';
import NotificationIcon from '../icons/NotificationIcon';
import CheckBox from './CheckBox';
import { Text } from './Themed';

const Settings = () => {
	return (
		<View
			style={{
				paddingHorizontal: 24,
			}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginBottom: 20,
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
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 16,
				}}>
				<Text>Shteti</Text>
				<Text
					style={{
						color: '#A3A3A3',
					}}>
					Kosovë
				</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Text>Qyteti</Text>
				<Text
					style={{
						color: '#A3A3A3',
					}}>
					Kosovë
				</Text>
			</View>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginBottom: 20,
					marginTop: 24,
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
					marginBottom: 16,
				}}>
				<Text>Aktivizo njoftimet</Text>
				<CheckBox isActive={true} />
			</View>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 16,
				}}>
				<Text>Njoftimet me zë</Text>
				<CheckBox isActive={false} />
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 16,
				}}>
				<Text>Vibrimi</Text>
				<CheckBox isActive={true} />
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 16,
				}}>
				<Text>Drita njoftuese</Text>
				<CheckBox isActive={false} />
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingRight: 5,
				}}>
				<Text>Para-njoftimet</Text>
				<ArrowRightIcon />
			</View>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginBottom: 20,
					marginTop: 24,
				}}>
				<GlobeIcon />
				<Text
					style={{
						color: Colors.primary,
						fontSize: 16,
						marginLeft: 12,
					}}>
					Modaliteti i natës
				</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Text>Gjendja</Text>
				<Text
					style={{
						color: '#A3A3A3',
					}}>
					Joaktive
				</Text>
			</View>

			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 24,
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
			</View>
		</View>
	);
};

export default Settings;
