import { Component } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { IMenuItems } from '../interface/menu';

@Component({
	selector: 'app-menu-bar',
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.scss']
})

export class MenuBarComponent {
	public menuItems: any = '';
	public menuSelected: string = 'home';

	constructor(private menuService: MenuService) {
		this.menuItems = this.menuService.menuItems;
	}

	public menuItemSelected(menuItem: string) {
		this.menuSelected = menuItem;
	}
}
