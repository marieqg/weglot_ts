import { computeWeekAvaibility } from './computeWeekAvaibility.js';
import { computePeriodObject } from './computePeriodObject.js';
import { computeResult } from './computeResult.js';

export const timeFinder = (timeSlogs: string[]) => {
	const periodObject = computePeriodObject(timeSlogs);
	const availableTimesForTheWeek = computeWeekAvaibility(periodObject);

	return computeResult(availableTimesForTheWeek);
};
