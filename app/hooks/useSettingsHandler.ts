import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import useNotification from './useNotification';

export default function useSettingsHandler() {
	const {
		requestPermissionsAsync,
		allowsNotificationsAsync,
		cancelAllScheduledNotificationsAsync,
	} = useNotification();

	const [isNotificationActive, setIsNotificationActive] = useState(false);

	const onNotificationClick = (val: boolean) => {
		setIsNotificationActive(val);
		if (val) {
			requestPermissionsAsync();
			cancelAllScheduledNotificationsAsync();
		} else {
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
