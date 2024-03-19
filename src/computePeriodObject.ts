import { BASIC_WORKING_WEEK, FULL_WORKING_DAY } from './constants.js';
import { IDayPeriod } from './types.js';
import { splitIntoTwoHours } from './utils.js';

export const computePeriodObject = (timeSlogs: string[]) => {
	const computedWeek = timeSlogs
		.sort()
		.reduce<Record<string, IDayPeriod>>((acc, cur) => {
			const [day, time]: string[] = cur.split(' ');
			const index = parseInt(day) - 1;

			if (acc[index] === undefined) acc[index] = { unAvailableTimes: [] };
			if (time === FULL_WORKING_DAY)
				acc[index] = { ...acc[index], isFullDayAvailable: false };
			else {
				acc[index] = {
					...acc[index],
					unAvailableTimes: [
						...acc[index].unAvailableTimes,
						splitIntoTwoHours(time),
					],
				};
			}
			return { ...acc };
		}, {});

	return { ...BASIC_WORKING_WEEK, ...computedWeek };
};
