import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import * as Notifications from 'expo-notifications';
import useNotification from './hooks/useNotification';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();
	const { scheduleAllPrayersNotification, allowsNotificationsAsync } =
		useNotification();

	useEffect(() => {
		// Request notification permissions and schedule notifications
		(async () => {
			const { status } = await Notifications.requestPermissionsAsync();
			if (status === 'granted') {
				await scheduleAllPrayersNotification(7); // Schedule for 7 days

				// Store the last scheduling time
				await AsyncStorage.setItem(
					'lastNotificationSchedule',
					new Date().toISOString(),
				);
			}
		})();

		// Set up a listener for app coming to foreground
		const subscription = Notifications.addNotificationReceivedListener(
			async () => {
				const lastScheduleStr = await AsyncStorage.getItem(
					'lastNotificationSchedule',
				);
				if (lastScheduleStr) {
					const lastSchedule = new Date(lastScheduleStr);
					const now = new Date();

					// If it's been more than 3 days since last scheduling, reschedule
					if (
						now.getTime() - lastSchedule.getTime() >
						3 * 24 * 60 * 60 * 1000
					) {
						if (await allowsNotificationsAsync()) {
							await scheduleAllPrayersNotification(7);
							await AsyncStorage.setItem(
								'lastNotificationSchedule',
								now.toISOString(),
							);
						}
					}
				}
			},
		);

		return () => subscription.remove();
	}, []);

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</SafeAreaProvider>
		);
	}
}
