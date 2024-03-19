import { END_WORKING_DAY, START_WORKING_DAY } from './constants.js';
import { removeIncludedPeriods } from './removeIncludedPeriods.js';
import { IPeriod } from './types.js';
import { isOverAnHour } from './utils.js';

export const computeAvailableTimes = (periods: IPeriod[]) => {
	const results: { startingHour: string; endingHour: string }[] = [];

	removeIncludedPeriods(periods);

	periods.map((one, index) => {
		const previousPeriod = periods[index - 1];

		const endingOfLastUnavaibility =
			previousPeriod?.endingHour ?? START_WORKING_DAY;

		const isNextStartingPeriodTheFurthest =
			endingOfLastUnavaibility > one.startingHour;

		const newAvaibility = {
			startingHour: isNextStartingPeriodTheFurthest
				? one.endingHour
				: endingOfLastUnavaibility,
			endingHour: isNextStartingPeriodTheFurthest
				? periods[index + 1]?.startingHour ?? END_WORKING_DAY
				: one.startingHour,
		};

		if (isOverAnHour(newAvaibility)) {
			results.push(newAvaibility);
		}
	});

	return results;
};
