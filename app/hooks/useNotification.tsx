import * as Notifications from 'expo-notifications';

export default function useNotification() {}

async function schedulePushNotification() {
	await Notifications.scheduleNotificationAsync({
		content: {
			title: "You've got mail! 📬",
			body: 'Here is the notification body',
			data: { data: 'goes here' },
		},
		trigger: { seconds: 2 },
	});
}