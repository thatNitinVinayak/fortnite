import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurrentSeasonComponent } from './current-season/current-season.component';
import { BattlePassComponent } from './battle-pass/battle-pass.component';
import { FortniteMapComponent } from './fortnite-map/fortnite-map.component';
import { SearchFnComponent } from './search-fn/search-fn.component';
import { FortniteSeasonComponent } from './fortnite-season/fortnite-season.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentSeasonComponent,
    BattlePassComponent,
    FortniteMapComponent,
    SearchFnComponent,
    FortniteSeasonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
