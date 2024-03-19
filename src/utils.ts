import { IPeriod } from './types.js';
import fs from 'fs';

const separators = ['-'];

const isOverAnHour = ({ startingHour, endingHour }: IPeriod) => {
	const substraction =
		Number(endingHour.replace(':', '')) - Number(startingHour.replace(':', ''));
	return substraction > 60;
};

const splitIntoTwoHours = (time: string) => {
	const res = time.split(new RegExp(separators.join('|'), 'g'));
	return {
		startingHour: res[0],
		endingHour: res[1],
	};
};

const convertNumberToString = (number: number) => {
	const str = number.toString();
	return str.length === 1 ? `0${str}` : str;
};

const addMinutes = (time: string, minutesToAdd: number) => {
	const splittedTime = time.split(':');
	const timeInMinutes = +splittedTime[0] * 60 + +splittedTime[1];
	const timePlusAnHour = timeInMinutes + minutesToAdd;
	const results = `${convertNumberToString(Math.floor(timePlusAnHour / 60))}:${convertNumberToString(timePlusAnHour % 60)}`;
	return results;
};

const readFileAndReturnArray = (fileName: string) => {
	return fs.readFileSync(`data/${fileName}.txt`).toString().split('\n');
};
export { isOverAnHour, splitIntoTwoHours, addMinutes, readFileAndReturnArray };
