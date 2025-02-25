import dayjs from 'dayjs';
import 'dayjs/locale/sq';

export function getFullDate(date = new Date()) {
	return dayjs(date).locale('sq').format('dddd, D MMMM YYYY');
}

export const checkCityTime = (time: any, city: number) => {
	if (city != 0) {
		let timeArray = time.split(':');
		const timeMinutes = parseInt(timeArray[1]) + city;

		if (timeMinutes >= 60) {
			timeArray = [parseInt(timeArray[0]) + 1, timeMinutes % 60];
		} else if (timeMinutes < 0) {
			timeArray = [parseInt(timeArray[0]) - 1, 60 + timeMinutes];
		} else {
			timeArray = [timeArray[0], timeMinutes];
		}

		return `${
			timeArray[0].toString().length == 1
				? '0' + timeArray[0].toString()
				: timeArray[0].toString()
		}:${
			timeArray[1].toString().length == 1
				? '0' + timeArray[1].toString()
				: timeArray[1].toString()
		}`;
	}
	return time;
};

export const checkCityTimeAndAddMinutes = (time: any, minutes: number) => {
	let timeArray = time.split(':');
	const timeMinutes = parseInt(timeArray[1]) + minutes;

	if (timeMinutes >= 60) {
		timeArray = [parseInt(timeArray[0]) + 1, timeMinutes % 60];
	} else if (timeMinutes < 0) {
		timeArray = [parseInt(timeArray[0]) - 1, 60 + timeMinutes];
	} else {
		timeArray = [timeArray[0], timeMinutes];
	}

	return `${
		timeArray[0].toString().length == 1
			? '0' + timeArray[0].toString()
			: timeArray[0].toString()
	}:${
		timeArray[1].toString().length == 1
			? '0' + timeArray[1].toString()
			: timeArray[1].toString()
	}`;
};

export const subtractMinutes = (
	date: string,
	time: string,
	subMins: number,
) => {
	const now = dayjs();
	const currentYear = now.year();

	return dayjs(`${currentYear}-${date} ${time}`).subtract(subMins, 'm');
};
