import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FortniteSeasonComponent } from './fortnite-season/fortnite-season.component';
import { BattlePassComponent } from './battle-pass/battle-pass.component';
import { FortniteMapComponent } from './fortnite-map/fortnite-map.component';
import { SearchFnComponent } from './search-fn/search-fn.component';

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
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
