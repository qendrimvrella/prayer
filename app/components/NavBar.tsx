import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import CalendarIcon from '../icons/CalendarIcon';
import ClockIcon from '../icons/ClockIcon';
import NavItem from './NavItem';
import SettingsIcon from '../icons/SettingsIcon';

interface Props {
	activeRoute: string;
}

const NavBar = ({ activeRoute }: Props) => {
	const navigation = useNavigation();
	const ROUTES = [
		{
			isActive: activeRoute === 'Dates',
			activeBgColor: '#759CDC',
			icon: () => (
				<CalendarIcon
					stroke={
						activeRoute === 'Dates' || activeRoute === 'Home'
							? '#fff'
							: '#759CDC'
					}
				/>
			),
			onPress: () => navigation.navigate('Dates'),
		},
		{
			isActive: activeRoute === 'Home',
			activeBgColor: '#ffffff99',
			icon: () => <ClockIcon />,
			iconColor: '#759CDC',
			onPress: () => navigation.navigate('Home'),
		},
		{
			isActive: activeRoute === 'Settings',
			activeBgColor: '#759CDC',
			icon: () => (
				<SettingsIcon
					stroke={
						activeRoute === 'Settings' || activeRoute === 'Home'
							? '#fff'
							: '#759CDC'
					}
				/>
			),
			onPress: () => navigation.navigate('Settings'),
		},
	];

	return (
		<View
			style={{
				height: 120,
				position: 'absolute',
				bottom: 0,
				left: 0,
				width: '100%',
				backgroundColor: '#ffffff44',
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
				paddingBottom: 30,
			}}>
			{ROUTES.map((item, index) => (
				<NavItem key={index} item={item} />
			))}
		</View>
	);
};

export default NavBar;
