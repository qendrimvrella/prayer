export const diffHrs = (diffMs: number) =>
	Math.floor((diffMs % 86400000) / 3600000);

export const diffMins = (diffMs: number) =>
	Math.round(((diffMs % 86400000) % 3600000) / 60000);
