import { useEffect, useState } from 'react';
import allTimes from '../times';
import { checkCityTime, diffHrs, diffMins } from '../helpers';
import { PrayesType } from '../types';
import useLocationHandler from './useLocationHandler';
import locations from '../constants/locations';
const formatedDate = new Date().toISOString().substring(5, 10);

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
	const festaFetar = allTimes[formatedDate].festaFetar;
	const time = allTimes[formatedDate];

	useEffect(() => {
		const newDate = new Date();
		const currentDate = newDate.getTime();

		const firstCharsOfNewDate = newDate.toISOString().substring(0, 11);
		const lastCharsOfNewDate = newDate.toISOString().substring(16);

		// const currentDate = new Date(
		// 	`${firstCharsOfNewDate}14:02${lastCharsOfNewDate}`,
		// ).getTime();

		let imsaku = checkCityTime(
			time[country].imsaku,
			locations[country][city],
		);
		let lindjaDiellit = checkCityTime(
			time[country].lindjaDiellit,
			locations[country][city],
		);
		let dreka = checkCityTime(
			time[country].dreka,
			locations[country][city],
		);
		let ikindia = checkCityTime(
			time[country].ikindia,
			locations[country][city],
		);
		let akshami = checkCityTime(
			time[country].akshami,
			locations[country][city],
		);
		let jacia = checkCityTime(
			time[country].jacia,
			locations[country][city],
		);

		setPrayer({
			imsaku,
			lindjaDiellit,
			dreka,
			ikindia,
			akshami,
			jacia,
		});

		const imsakuTime = new Date(
			`${firstCharsOfNewDate}${imsaku}${lastCharsOfNewDate}`,
		).getTime();
		const lindjaDiellitTime = new Date(
			`${firstCharsOfNewDate}${lindjaDiellit}${lastCharsOfNewDate}`,
		).getTime();
		const drekaTime = new Date(
			`${firstCharsOfNewDate}${dreka}${lastCharsOfNewDate}`,
		).getTime();
		const ikindiaTime = new Date(
			`${firstCharsOfNewDate}${ikindia}${lastCharsOfNewDate}`,
		).getTime();
		const akshamiTime = new Date(
			`${firstCharsOfNewDate}${akshami}${lastCharsOfNewDate}`,
		).getTime();
		const jaciaTime = new Date(
			`${firstCharsOfNewDate}${jacia}${lastCharsOfNewDate}`,
		).getTime();
		let activeDiffPrayer: number = imsakuTime;

		if (imsakuTime >= currentDate) {
			setActivePrayer('imsaku');
			activeDiffPrayer = imsakuTime;
		} else if (lindjaDiellitTime >= currentDate) {
			setActivePrayer('lindjaDiellit');
			activeDiffPrayer = lindjaDiellitTime;
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
	}, [country, city]);

	return {
		activePrayer,
		hoursTillPrayer,
		minutesTillPrayer,
		country,
		city,
		paryer,
		festaFetar,
	} as const;
}
