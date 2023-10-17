import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import times from '../constants/times';
import { subtractMinutes } from '../helpers';

export default function useNotification() {
	scheduleAllPrayersNotification();
	return {
		schedulePushNotification,
		requestPermissionsAsync,
		cancelAllScheduledNotificationsAsync,
		allowsNotificationsAsync,
	};
}

async function scheduleAllPrayersNotification() {
	let timesForNotification = {
		sabahu: true,
		dreka: true,
		ikindia: true,
		akshami: true,
		jacia: true,
	};
	let beforePrayerNotification = {
		sabahu: 0,
		dreka: 0,
		ikindia: 0,
		akshami: 0,
		jacia: 0,
	};

	const prayersAS = await AsyncStorage.getItem('prayerNotification');
	if (prayersAS !== null) {
		timesForNotification = JSON.parse(prayersAS);
	}
	const beforeNotificationAS = await AsyncStorage.getItem(
		'isBeforePrayerNotificationActive',
	);
	if (beforeNotificationAS !== null) {
		if (JSON.parse(beforeNotificationAS)) {
			const beforePrayerNotificationAS = await AsyncStorage.getItem(
				'beforePrayerNotification',
			);
			if (beforePrayerNotificationAS !== null) {
				beforePrayerNotification = JSON.parse(
					beforePrayerNotificationAS,
				);
			}
		}
	}

	Object.keys(times).map((key) => {
		if (timesForNotification.sabahu) {
			let sabahu = subtractMinutes(
				key,
				times[key].imsaku,
				beforePrayerNotification.sabahu,
			);
			// Notifications.scheduleNotificationAsync({
			// 	content: {
			// 		title: 'Sabahu',
			// 		body: 'Koha e namzit te Sabahut',
			// 	},
			// 	trigger: new Date(),
			// });
		}

		if (timesForNotification.dreka) {
			let dreka = subtractMinutes(
				key,
				times[key].dreka,
				beforePrayerNotification.dreka,
			);
		}

		if (timesForNotification.ikindia) {
			let ikindia = subtractMinutes(
				key,
				times[key].ikindia,
				beforePrayerNotification.ikindia,
			);
		}

		if (timesForNotification.akshami) {
			let akshami = subtractMinutes(
				key,
				times[key].akshami,
				beforePrayerNotification.akshami,
			);
		}

		if (timesForNotification.jacia) {
			let jacia = subtractMinutes(
				key,
				times[key].jacia,
				beforePrayerNotification.jacia,
			);
		}
	});
}

async function schedulePushNotification() {
	await Notifications.scheduleNotificationAsync({
		content: {
			title: 'Dreka',
			body: 'Koha e namzit te Drekes',
		},

		trigger: { seconds: 3 },
	});
}

async function requestPermissionsAsync() {
	return await Notifications.requestPermissionsAsync({
		ios: {
			allowAlert: true,
			allowBadge: true,
			allowSound: true,
			allowAnnouncements: true,
		},
	});
}

async function allowsNotificationsAsync() {
	const settings = await Notifications.getPermissionsAsync();
	return (
		settings.granted ||
		settings.ios?.status ===
			Notifications.IosAuthorizationStatus.PROVISIONAL
	);
}

async function cancelAllScheduledNotificationsAsync() {
	await Notifications.cancelAllScheduledNotificationsAsync();
}
