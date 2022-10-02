import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterBaseStatsPage } from './character-base-stats.page';
import {CharacterResolver} from '../resolver/character.resolver';

const routes: Routes = [
  {
    path: '',
    component: CharacterBaseStatsPage,
    resolve: {
      character: CharacterResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterBaseStatsPageRoutingModule {}
