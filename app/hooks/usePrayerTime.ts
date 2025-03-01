import { useEffect, useMemo, useState } from 'react';
import allTimes from '../constants/times';
import { PrayesType } from '../types';
import dayjs from 'dayjs';

export default function usePrayerTime(dateOffset = 0) {
	const [activePrayer, setActivePrayer] = useState<PrayesType>('imsaku');
	const [hoursTillPrayer, setHoursTillPrayer] = useState(0);
	const [minutesTillPrayer, setMinutesTillPrayer] = useState(0);
	const [prayer, setPrayer] = useState({
		imsaku: '',
		lindjaDiellit: '',
		dreka: '',
		ikindia: '',
		akshami: '',
		jacia: '',
	});

	// Get the date with the offset applied
	const targetDate = dayjs().add(dateOffset, 'day');
	const currentMonth = targetDate.format('MM');
	const currentDay = targetDate.format('DD');

	const time = useMemo(() => {
		return currentMonth in allTimes
			? allTimes[currentMonth][currentDay]
			: undefined;
	}, [currentMonth, currentDay]);

	const handleActiveTime = () => {
		const now = dayjs();
		const date = targetDate.format('YYYY-MM-DD');
		const currentDateInMs = now.valueOf();

		// If we're looking at a future or past day, we need to adjust the time calculations
		if (dateOffset !== 0) {
			// For non-current days, just set the prayer times without countdown
			setPrayer(
				time || {
					imsaku: '',
					lindjaDiellit: '',
					dreka: '',
					ikindia: '',
					akshami: '',
					jacia: '',
				},
			);

			if (dateOffset === 1) {
				setActivePrayer('imsaku');
			} else if (dateOffset === 2) {
				setActivePrayer('lindjaDiellit');
			} else if (dateOffset === 3) {
				setActivePrayer('dreka');
			} else if (dateOffset === 4) {
				setActivePrayer('ikindia');
			} else if (dateOffset === 5) {
				setActivePrayer('akshami');
			} else if (dateOffset === 6) {
				setActivePrayer('jacia');
			} else {
				setActivePrayer('imsaku');
			}
			return;
		}

		// Original logic for current day
		const imsakuTime = dayjs(`${date} ${time.imsaku}`).valueOf();
		const lindjaDiellitTime = dayjs(
			`${date} ${time.lindjaDiellit}`,
		).valueOf();
		const drekaTime = dayjs(`${date} ${time.dreka}`).valueOf();
		const ikindiaTime = dayjs(`${date} ${time.ikindia}`).valueOf();
		const akshamiTime = dayjs(`${date} ${time.akshami}`).valueOf();
		const jaciaTime = dayjs(`${date} ${time.jacia}`).valueOf();

		let activeDiffPrayer: number = imsakuTime;

		if (imsakuTime >= currentDateInMs) {
			setActivePrayer('imsaku');
			activeDiffPrayer = imsakuTime;
		} else if (lindjaDiellitTime >= currentDateInMs) {
			setActivePrayer('lindjaDiellit');
			activeDiffPrayer = lindjaDiellitTime;
		} else if (drekaTime >= currentDateInMs) {
			setActivePrayer('dreka');
			activeDiffPrayer = drekaTime;
		} else if (ikindiaTime >= currentDateInMs) {
			setActivePrayer('ikindia');
			activeDiffPrayer = ikindiaTime;
		} else if (akshamiTime >= currentDateInMs) {
			setActivePrayer('akshami');
			activeDiffPrayer = akshamiTime;
		} else {
			setActivePrayer('jacia');
			activeDiffPrayer = jaciaTime;
		}

		const diffM = (now.diff(activeDiffPrayer, 'minute') % 60) - 1;
		const diffH = now.diff(activeDiffPrayer, 'hour');
		const minutesTillPrayer = diffM === -60 ? 0 : -diffM;

		let hoursTillPrayer = -diffH;
		if (diffM === -60) {
			hoursTillPrayer = hoursTillPrayer + 1;
		}

		setPrayer(time);
		setHoursTillPrayer(hoursTillPrayer);
		setMinutesTillPrayer(minutesTillPrayer);
	};

	useEffect(() => {
		if (time !== undefined) {
			handleActiveTime();
		}
	}, [time, dateOffset]);

	useEffect(() => {
		// Only set up the interval for the current day
		if (dateOffset === 0) {
			const activeTimeout = setInterval(() => {
				handleActiveTime();
			}, 1000);

			return () => {
				clearInterval(activeTimeout);
			};
		}
	}, [dateOffset]);

	return {
		activePrayer,
		hoursTillPrayer,
		minutesTillPrayer,
		prayer,
	} as const;
}
