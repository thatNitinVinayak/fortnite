import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FortniteSeasonComponent } from './fortnite-season/fortnite-season.component';
import { BattlePassComponent } from './battle-pass/battle-pass.component';
import { FortniteMapComponent } from './fortnite-map/fortnite-map.component';
import { SearchFnComponent } from './search-fn/search-fn.component';
import { MenuService } from './service/menu.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FortniteSeasonComponent,
        BattlePassComponent,
        FortniteMapComponent,
        SearchFnComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
		MatIconModule,
		MatButtonModule,
		MatInputModule,
		MatAutocompleteModule,
		MatSelectModule,
		MatOptionModule,
    ],
    providers: [
      MenuService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
