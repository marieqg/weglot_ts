import { IDayPeriod } from './types.js';

const ONE_DAY: IDayPeriod = {
	unAvailableTimes: [],
	isFullDayAvailable: true,
};

export const BASIC_WORKING_WEEK: Record<string, IDayPeriod> = {
	'0': ONE_DAY,
	'1': ONE_DAY,
	'2': ONE_DAY,
	'3': ONE_DAY,
	'4': ONE_DAY,
};

export const FULL_WORKING_DAY = '08:00-17:59';

export const START_WORKING_DAY = '08:00';

export const END_WORKING_DAY = '17:59';

export const FULL_DAY_AVAILABLE = {
	startingHour: START_WORKING_DAY,
	endingHour: END_WORKING_DAY,
};
