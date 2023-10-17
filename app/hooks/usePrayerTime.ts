import { useEffect, useState } from 'react';
import allTimes from '../constants/times';
import { PrayesType } from '../types';
import useLocationHandler from './useLocationHandler';
import dayjs from 'dayjs';

export default function usePrayerTime() {
	const { country, city } = useLocationHandler();
	const [activePrayer, setActivePrayer] = useState<PrayesType>('imsaku');
	const [hoursTillPrayer, setHoursTillPrayer] = useState(0);
	const [minutesTillPrayer, setMinutesTillPrayer] = useState(0);
	const [paryer, setPrayer] = useState({
		imsaku: '',
		lindjaDiellit: '',
		dreka: '',
		ikindia: '',
		akshami: '',
		jacia: '',
	});
	const formatedDate = dayjs().format('MM-DD');
	const time = formatedDate in allTimes ? allTimes[formatedDate] : undefined;

	const handleActiveTime = () => {
		const now = dayjs();
		const date = now.format('YYYY-MM-DD');
		const currentDateInMs = now.valueOf();

		// const currentDate = new Date(
		// 	`${firstCharsOfNewDate}04:04${lastCharsOfNewDate}`,
		// ).getTime();

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
	}, [country, city]);

	useEffect(() => {
		const activeTimeout = setInterval(() => {
			handleActiveTime();
		}, 1000);

		return () => {
			clearInterval(activeTimeout);
		};
	}, []);

	return {
		activePrayer,
		hoursTillPrayer,
		minutesTillPrayer,
		country,
		city,
		paryer,
	} as const;
}
