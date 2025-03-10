import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import useNotification from './useNotification';

export default function useSettingsHandler() {
	const {
		requestPermissionsAsync,
		allowsNotificationsAsync,
		scheduleAllPrayersNotification,
		cancelAllScheduledNotificationsAsync,
	} = useNotification();

	const [isNotificationActive, setIsNotificationActive] = useState(false);

	const onNotificationClick = async (val: boolean) => {
		setIsNotificationActive(val);

		if (val) {
			await requestPermissionsAsync();
			await scheduleAllPrayersNotification(7);
		} else {
			await cancelAllScheduledNotificationsAsync();
			Linking.openSettings();
		}
	};

	useEffect(() => {
		(async () => {
			if (await allowsNotificationsAsync()) {
				setIsNotificationActive(true);
			}
		})();
	}, []);

	return {
		isNotificationActive,
		onNotificationClick,
	};
}
