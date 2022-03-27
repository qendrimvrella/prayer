import * as Notifications from 'expo-notifications';

export default function useNotification() {
	return {
		schedulePushNotification,
		requestPermissionsAsync,
		cancelAllScheduledNotificationsAsync,
		allowsNotificationsAsync,
	};
}

async function schedulePushNotification() {
	await Notifications.scheduleNotificationAsync({
		content: {
			title: 'Dreka',
			body: 'Koha e namzit te Drekes',
			vibrate: [],
		},
		trigger: 1648157624221,
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
