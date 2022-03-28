import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import times from '../constants/times';
import { checkCityTime, checkCityTimeAndAddMinutes } from '../helpers';
import locations from '../constants/locations';

export default function useNotification() {
	// scheduleAllPrayersNotification();
	return {
		schedulePushNotification,
		requestPermissionsAsync,
		cancelAllScheduledNotificationsAsync,
		allowsNotificationsAsync,
	};
}

async function scheduleAllPrayersNotification() {
	let country = 'Kosovë';
	let city = 'Prishtinë';
	let timesForNotification = {
		sabahu: true,
		dreka: true,
		ikindia: true,
		akshami: true,
		jacia: true,
	};
	const countryName = await AsyncStorage.getItem('country');
	if (countryName !== null) {
		country = countryName;
	}
	const cityName = await AsyncStorage.getItem('city');
	if (cityName !== null) {
		city = cityName;
	}

	let prayersAS = await AsyncStorage.getItem('prayerNotification');
	if (prayersAS !== null) {
		timesForNotification = JSON.parse(prayersAS);
	}

	Object.keys(times).map((key) => {
		if (timesForNotification.sabahu) {
			let sabahu = checkCityTimeAndAddMinutes(
				times[key][country].imsaku,
				locations[country][city],
				30,
			);
		}

		if (timesForNotification.dreka) {
			let dreka = checkCityTime(
				times[key][country].dreka,
				locations[country][city],
			);
		}

		if (timesForNotification.ikindia) {
			let ikindia = checkCityTime(
				times[key][country].ikindia,
				locations[country][city],
			);
		}

		if (timesForNotification.akshami) {
			let akshami = checkCityTime(
				times[key][country].akshami,
				locations[country][city],
			);
		}

		if (timesForNotification.jacia) {
			let jacia = checkCityTime(
				times[key][country].jacia,
				locations[country][city],
			);
		}
	});

	// await Notifications.scheduleNotificationAsync({
	// 	content: {
	// 		title: 'Dreka',
	// 		body: 'Koha e namzit te Drekes',
	// 	},

	// 	trigger: { seconds: 3 },
	// });
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
