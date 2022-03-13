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
import ModalScreen from '../screens/ModalScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

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
				<Stack.Screen name="Modal" component={ModalScreen} />
				<Stack.Screen name="AboutUs" component={AboutUsScreen} />
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
				options={({ navigation }: any) => ({
					headerShown: false,
				})}
			/>
			<Tab.Screen
				name="Dates"
				component={DatesScreen}
				options={({ navigation }: any) => ({
					headerShown: false,
				})}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={({ navigation }: any) => ({
					headerShown: false,
				})}
			/>
		</Tab.Navigator>
	);
}
