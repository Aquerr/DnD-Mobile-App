import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterBaseStatsPage } from './character-base-stats.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterBaseStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterBaseStatsPageRoutingModule {}
