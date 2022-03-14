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
			? '0' + date.getMonth()
			: date.getMonth()
	}/${date.getFullYear()}`;
};

export const checkCityTime = (time: any, city: number) => {
	if (city != 0) {
		let imsakuArray = time.split(':');
		const imsakuMinutes = parseInt(imsakuArray[1]) + city;

		if (imsakuMinutes >= 60) {
			imsakuArray = [parseInt(imsakuArray[0]) + 1, imsakuMinutes % 60];
		} else if (imsakuMinutes < 0) {
			imsakuArray = [parseInt(imsakuArray[0]) - 1, 60 + imsakuMinutes];
		} else {
			imsakuArray = [imsakuArray[0], imsakuMinutes];
		}

		return `${
			imsakuArray[0].toString().length == 1
				? '0' + imsakuArray[0].toString()
				: imsakuArray[0].toString()
		}:${
			imsakuArray[1].toString().length == 1
				? '0' + imsakuArray[1].toString()
				: imsakuArray[1].toString()
		}`;
	}
	return time;
};
