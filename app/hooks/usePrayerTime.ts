import { useEffect, useState } from 'react';
import allTimes from '../times';
import { diffHrs, diffMins } from '../helpers';
import { PrayesType } from '../types';
const formatedDate = new Date().toISOString().substring(5, 10);

export default function usePrayerTime() {
	const [activePrayer, setActivePrayer] = useState<PrayesType>('imsaku');
	const [hoursTillPrayer, setHoursTillPrayer] = useState(0);
	const [minutesTillPrayer, setMinutesTillPrayer] = useState(0);
	const time = allTimes[formatedDate];

	useEffect(() => {
		const newDate = new Date();
		const currentDate = newDate.getTime();

		const firstCharsOfNewDate = newDate.toISOString().substring(0, 11);
		const lastCharsOfNewDate = newDate.toISOString().substring(16);

		const imsakuTime = new Date(
			`${firstCharsOfNewDate}${time['Kosovë'].imsaku}${lastCharsOfNewDate}`,
		).getTime();
		const lindjaDjellitTime = new Date(
			`${firstCharsOfNewDate}${time['Kosovë'].lindjaDjellit}${lastCharsOfNewDate}`,
		).getTime();
		const drekaTime = new Date(
			`${firstCharsOfNewDate}${time['Kosovë'].dreka}${lastCharsOfNewDate}`,
		).getTime();
		const ikindiaTime = new Date(
			`${firstCharsOfNewDate}${time['Kosovë'].ikindia}${lastCharsOfNewDate}`,
		).getTime();
		const akshamiTime = new Date(
			`${firstCharsOfNewDate}${time['Kosovë'].akshami}${lastCharsOfNewDate}`,
		).getTime();
		const jaciaTime = new Date(
			`${firstCharsOfNewDate}${time['Kosovë'].jacia}${lastCharsOfNewDate}`,
		).getTime();
		let activeDiffPrayer: number = imsakuTime;

		if (imsakuTime >= currentDate) {
			setActivePrayer('imsaku');
			activeDiffPrayer = imsakuTime;
		} else if (lindjaDjellitTime >= currentDate) {
			setActivePrayer('lindjaDjellit');
			activeDiffPrayer = lindjaDjellitTime;
		} else if (drekaTime >= currentDate) {
			setActivePrayer('dreka');
			activeDiffPrayer = drekaTime;
		} else if (ikindiaTime >= currentDate) {
			setActivePrayer('ikindia');
			activeDiffPrayer = ikindiaTime;
		} else if (akshamiTime >= currentDate) {
			setActivePrayer('akshami');
			activeDiffPrayer = akshamiTime;
		} else {
			setActivePrayer('jacia');
			activeDiffPrayer = jaciaTime;
		}
		const diffMs = activeDiffPrayer - currentDate;
		setHoursTillPrayer(diffHrs(diffMs));
		setMinutesTillPrayer(diffMins(diffMs));
	}, []);

	return {
		activePrayer,
		hoursTillPrayer,
		minutesTillPrayer,
        time,
	} as const;
}
