import { IPeriod } from './types.js';

export const removeIncludedPeriods = (period: IPeriod[]) => {
	period.map((one, index) => {
		const previousPeriod = period[index - 1];
		const isPeriodIncludedInPreviousPeriod =
			previousPeriod && previousPeriod.endingHour > one.endingHour;

		if (isPeriodIncludedInPreviousPeriod) period.splice(index, 1);
	});

	return period;
};
