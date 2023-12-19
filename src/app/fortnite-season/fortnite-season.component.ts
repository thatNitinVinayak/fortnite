import { Component, OnInit } from '@angular/core';
import { SeasonDetailsService } from '../service/season-details.service';

@Component({
  selector: 'app-fortnite-season',
  templateUrl: './fortnite-season.component.html',
  styleUrls: ['./fortnite-season.component.scss']
})
export class FortniteSeasonComponent implements OnInit {
	public seasonDetails: any = '';
		
	constructor(private seasonDetailsService: SeasonDetailsService) {}

	ngOnInit(): void {
		this.seasonDetails = this.seasonDetailsService.seasonDetails;
	}

}
