import { Component } from '@angular/core';
import { MenuService } from './service/menu.service';
import { IMenuItems } from './interface/menu';

@Component({
		selector: 'app-root',
		templateUrl: './app.component.html',
		styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'FORTNITE';

	public menuItems: any = '';
	public menuSelected: string = 'home';

	constructor(private menuService: MenuService) {
		this.menuItems = this.menuService.menuItems;
	}

	public menuItemSelected(menuItem: string) {
		this.menuSelected = menuItem;

	}
}
