import { START_WORKING_DAY } from './constants.js';
import { Week } from './types.js';
import { addMinutes } from './utils.js';

export const computeResult = (week: Week) => {
	let result: string | undefined = undefined;
	for (let i = 0; i <= 5; i++) {
		const day = week[i];

		if (result !== undefined) break;
		if (day.isFullDayAvailable || day.availableTimes?.at(0) !== undefined) {
			const startingHour =
				day.availableTimes?.at(0)?.startingHour ?? START_WORKING_DAY;
			const finalStartingHour =
				startingHour !== START_WORKING_DAY
					? addMinutes(startingHour, 1)
					: startingHour;
			result = `${i + 1} ${finalStartingHour}-${addMinutes(finalStartingHour, 59)}`;
		}
	}
	return result;
};
