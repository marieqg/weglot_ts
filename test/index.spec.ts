import { readFileAndReturnArray } from '../src/utils.js';
import { timeFinder } from '../src/timeFinder.js';
import fs from 'fs';

const numbers = [1, 2, 3, 4, 5];

describe('test Inputs', () => {
	test.each(numbers)('%p', (number) => {
		expect(timeFinder(readFileAndReturnArray(`input${number}`))).toBe(
			fs.readFileSync(`data/output${number}.txt`).toString()
		);
	});
});
