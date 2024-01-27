import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class SeasonDetailsService {
	public seasonDetails: any = {
		chapterSeason: 'Chapter 5 Season 1',
		chapterSeason_short: 'C5S1',
		seasonName: 'Underground',
		startDate: '3 December 2023',
		endDate: '8 March 2024',
		startDateAndTime: new Date('2023-12-03T00:00:00'),
		endDateAndTime: new Date('2024-03-08T12:30:00'),
	}
}

// Date & Time Format:	YYY-MM-DDTHH:MM:SS