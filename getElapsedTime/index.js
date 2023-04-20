const ONE_MIN = 60000;
const ONE_HOUR = ONE_MIN * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_WEEK = ONE_DAY * 7;

export function getElapsedTime(start) {
	if (start === undefined) {
		return 'err!';
	}
	try {
		const startDate = new Date(start);
		const nowDate = new Date();
		const diff = nowDate.getTime() - startDate.getTime();
		let result;

		if (diff < ONE_MIN) {
			return 'just now';
		} else if (diff > ONE_MIN && diff < ONE_HOUR) {
			result = `${(diff / ONE_MIN).toFixed(0)}m`;
		} else if (diff > ONE_HOUR && diff < ONE_DAY) {
			result = `${(diff / ONE_HOUR).toFixed(0)}h`;
		} else if (diff > ONE_DAY && diff < ONE_WEEK) {
			result = `${(diff / ONE_DAY).toFixed(0)}d`;
		} else if (diff > ONE_WEEK) {
			result = `${(diff / ONE_WEEK).toFixed(0)}w`;
		}

		return `${result} ago`;
	} catch (e) {
		return 'err!';
	}
}
