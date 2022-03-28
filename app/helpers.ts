export const diffHrs = (diffMs: number) =>
	Math.floor((diffMs % 86400000) / 3600000);

export const diffMins = (diffMs: number) =>
	Math.round(((diffMs % 86400000) % 3600000) / 60000);

export const getFullDate = () => {
	const date = new Date();

	return `${
		date.getDate().toString().length == 1
			? '0' + date.getDate().toString()
			: date.getDate().toString()
	}/${
		date.getMonth().toString().length == 1
			? '0' + (date.getMonth() + 1)
			: date.getMonth() + 1
	}/${date.getFullYear()}`;
};

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

export const checkCityTimeAndAddMinutes = (
	time: any,
	city: number,
	minutes: number,
) => {
	if (city != 0) {
		let timeArray = time.split(':');
		const timeMinutes = parseInt(timeArray[1]) + city + minutes;

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
