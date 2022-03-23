import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LinkingConfiguration from './LinkingConfiguration';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DatesScreen from '../screens/DatesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { RootStackParamList } from '../types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeforePrayerScreen from '../screens/BeforePrayerScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import PrayerNotificationScreen from '../screens/PrayerNotificationScreen';

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Group
				screenOptions={{
					presentation: 'modal',
					headerTintColor: '#000',
					headerShown: false,
				}}>
				<Stack.Screen
					name="BeforePrayer"
					component={BeforePrayerScreen}
				/>
				<Stack.Screen name="AboutUs" component={AboutUsScreen} />
				<Stack.Screen
					name="PrayerNotification"
					component={PrayerNotificationScreen}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					display: 'none',
				},
			}}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={() => ({
					headerShown: false,
				})}
			/>
			<Tab.Screen
				name="Dates"
				component={DatesScreen}
				options={() => ({
					headerShown: false,
				})}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={() => ({
					headerShown: false,
				})}
			/>
		</Tab.Navigator>
	);
}
