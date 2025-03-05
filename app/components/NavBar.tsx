import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CalendarIcon from '../icons/CalendarIcon';
import ClockIcon from '../icons/ClockIcon';
import NavItem from './NavItem';
import SettingsIcon from '../icons/SettingsIcon';
import { BlurView } from 'expo-blur';

interface Props {
	activeRoute: string;
	homeIconColor?: string;
}

const NavBar = ({ activeRoute, homeIconColor }: Props) => {
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
			onPress: () => navigation.navigate('Root', { screen: 'Dates' }),
		},
		{
			isActive: activeRoute === 'Home',
			activeBgColor: '#ffffff99',
			icon: () => <ClockIcon iconColor={homeIconColor} />,
			onPress: () => navigation.navigate('Root', { screen: 'Home' }),
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
			onPress: () => navigation.navigate('Root', { screen: 'Settings' }),
		},
	];

	return (
		<BlurView
			intensity={50}
			tint={'light'}
			style={{
				height: 90,
				position: 'absolute',
				bottom: 0,
				left: 0,
				width: '100%',
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
				paddingBottom: 20,
			}}>
			{ROUTES.map((item, index) => (
				<NavItem key={index} item={item} />
			))}
		</BlurView>
	);
};

export default NavBar;
