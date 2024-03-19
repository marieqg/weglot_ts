import { computeAvailableTimes } from './computeAvailableTimes.js';
import { FULL_DAY_AVAILABLE } from './constants.js';
import { Week } from './types.js';

export const computeWeekAvaibility = (week: Week) => {
	Object.keys(week).map((day) => {
		const dayObject = week[day];
		const { isFullDayAvailable } = dayObject;

		if (isFullDayAvailable === false) return;

		if (isFullDayAvailable) {
			week[day] = { ...dayObject, availableTimes: [FULL_DAY_AVAILABLE] };
		} else {
			week[day] = {
				...dayObject,
				availableTimes: computeAvailableTimes(week[day].unAvailableTimes),
			};
		}
	});

	return week;
};
