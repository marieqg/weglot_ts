// const timeSlogsValues = require('./input1')
import { timeFinder } from './timeFinder.js';
import { readFileAndReturnArray } from './utils.js';

const array = readFileAndReturnArray('input5');

console.log('result:', timeFinder(array));
