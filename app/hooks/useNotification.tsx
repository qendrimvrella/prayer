import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import times from '../constants/times';
import dayjs from 'dayjs';

type PrayerType = 'sabahu' | 'dreka' | 'ikindia' | 'akshami' | 'jacia';

export default function useNotification() {
	return {
		scheduleAllPrayersNotification,
		schedulePushNotification,
		requestPermissionsAsync,
		cancelAllScheduledNotificationsAsync,
		allowsNotificationsAsync,
	};
}

async function scheduleAllPrayersNotification(daysToSchedule = 7) {
	// Cancel all existing notifications first
	await Notifications.cancelAllScheduledNotificationsAsync();

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

	// Get user preferences
	const prayersAS = await AsyncStorage.getItem('prayerNotification');
	if (prayersAS !== null) {
		timesForNotification = JSON.parse(prayersAS);
	}

	const beforeNotificationAS = await AsyncStorage.getItem(
		'isBeforePrayerNotificationActive',
	);
	const beforeNotification =
		beforeNotificationAS !== null && JSON.parse(beforeNotificationAS);

	if (beforeNotification) {
		const beforePrayerNotificationAS = await AsyncStorage.getItem(
			'beforePrayerNotification',
		);
		if (beforePrayerNotificationAS !== null) {
			beforePrayerNotification = JSON.parse(beforePrayerNotificationAS);
		}
	}

	const prayers = {
		sabahu: { title: 'Sabahu', body: 'Koha e namazit të Sabahut' },
		dreka: { title: 'Dreka', body: 'Koha e namazit të Drekës' },
		ikindia: { title: 'Ikindia', body: 'Koha e namazit të Ikindisë' },
		akshami: { title: 'Akshami', body: 'Koha e namazit të Akshamit' },
		jacia: { title: 'Jacia', body: 'Koha e namazit të Jacisë' },
	};

	// Schedule for multiple days
	for (let dayOffset = 0; dayOffset < daysToSchedule; dayOffset++) {
		const targetDate = dayjs().add(dayOffset, 'day');
		const targetMonth = targetDate.format('MM');
		const targetDay = targetDate.format('DD');
		const prayerTimes = times[targetMonth]?.[targetDay];

		if (!prayerTimes) continue;

		// Schedule notifications for each prayer if enabled
		for (const [prayer, enabled] of Object.entries(
			timesForNotification,
		) as [PrayerType, boolean][]) {
			if (!enabled) continue;

			const prayerTime = prayerTimes[prayer];
			if (!prayerTime) continue;

			const [hours, minutes] = prayerTime.split(':');
			const scheduledTime = targetDate
				.hour(parseInt(hours))
				.minute(parseInt(minutes))
				.second(0);

			// Skip if time has already passed
			if (scheduledTime.isBefore(dayjs())) continue;

			// Schedule main prayer notification
			await Notifications.scheduleNotificationAsync({
				content: {
					title: prayers[prayer].title,
					body: prayers[prayer].body,
					data: { prayer, date: scheduledTime.format('YYYY-MM-DD') },
				},
				trigger: {
					type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
					hour: scheduledTime.hour(),
					minute: scheduledTime.minute(),
					day: scheduledTime.date(),
					month: scheduledTime.month() + 1, // dayjs months are 0-indexed
					year: scheduledTime.year(),
				},
			});

			// Schedule before prayer notification if enabled
			const beforeMinutes = beforePrayerNotification[prayer];
			if (beforeMinutes > 0 && beforeNotification) {
				const beforeTime = scheduledTime.subtract(
					beforeMinutes,
					'minutes',
				);

				// Skip if reminder time has already passed
				if (beforeTime.isBefore(dayjs())) continue;

				await Notifications.scheduleNotificationAsync({
					content: {
						title: `${prayers[prayer].title} - Përkujtim`,
						body: `${beforeMinutes} minuta deri në kohën e ${prayers[prayer].title}`,
						data: {
							prayer,
							reminder: true,
							date: scheduledTime.format('YYYY-MM-DD'),
						},
					},
					trigger: {
						type: Notifications.SchedulableTriggerInputTypes
							.CALENDAR,
						hour: beforeTime.hour(),
						minute: beforeTime.minute(),
						day: beforeTime.date(),
						month: beforeTime.month() + 1, // dayjs months are 0-indexed
						year: beforeTime.year(),
					},
				});
			}
		}
	}
}

async function schedulePushNotification() {
	await Notifications.scheduleNotificationAsync({
		content: {
			title: 'Dreka',
			body: 'Koha e namzit te Drekes',
		},
		trigger: {
			type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
			seconds: 3,
		},
	});
}

async function requestPermissionsAsync() {
	return await Notifications.requestPermissionsAsync({
		ios: {
			allowAlert: true,
			allowBadge: true,
			allowSound: true,
			// allowAnnouncements: true,
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
