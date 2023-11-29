import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FortniteSeasonComponent } from './fortnite-season/fortnite-season.component';
import { BattlePassComponent } from './battle-pass/battle-pass.component';
import { FortniteMapComponent } from './fortnite-map/fortnite-map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'current-season', component: FortniteSeasonComponent },
  { path: 'battle-pass', component: BattlePassComponent },
  { path: 'map', component: FortniteMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
