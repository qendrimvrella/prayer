import { useEffect, useMemo, useState } from 'react';
import allTimes from '../constants/times';
import { PrayesType } from '../types';
import dayjs from 'dayjs';

export default function usePrayerTime() {
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
	const currentMonth = dayjs().format('MM');
	const currentDay = dayjs().format('DD');

	const time = useMemo(() => {
		return currentMonth in allTimes
			? allTimes[currentMonth][currentDay]
			: undefined;
	}, []);

	const handleActiveTime = () => {
		const now = dayjs();
		const date = now.format('YYYY-MM-DD');
		const currentDateInMs = now.valueOf();
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
	}, []);

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
		paryer,
	} as const;
}
