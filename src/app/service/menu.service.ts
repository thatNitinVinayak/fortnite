import { Injectable } from '@angular/core';
import { IMenuItems } from '../interface/menu';

@Injectable({
	providedIn: 'root'
})

export class MenuService {
    menuItems: IMenuItems[] = [
        { name: 'Home', key: 'home' },
        { name: 'Current Season', key: 'current-season' },
        { name: 'Battle Pass', key: 'battle-pass' },
        { name: 'Map', key: 'map' },
    ]
}
