export interface IPeriod {
	startingHour: string;
	endingHour: string;
}

export interface IDayPeriod {
	unAvailableTimes: IPeriod[];
	isFullDayAvailable?: boolean;
	availableTimes?: IPeriod[];
}

export type Week = { [x: string]: IDayPeriod };
