import { Component } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
	selector: 'app-search-fn',
	templateUrl: './search-fn.component.html',
	styleUrls: ['./search-fn.component.scss']
})

export class SearchFnComponent {
	public menuItems: any = '';
    public expandedSearchbar: boolean = false;

	constructor(private menuService: MenuService) {
		this.menuItems = menuService.menuItems;
	}

    public searchIconClicked() {
        this.expandedSearchbar = !this.expandedSearchbar;
    }

	public routeTo_selectedMenu(menuItemSelected: string) {
		
	}
}
