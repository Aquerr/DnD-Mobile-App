import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterPage } from './character.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterPage,
    children: [
      {
        path: 'base-stats',
        loadChildren: () => import('./character-base-stats/character-base-stats.module').then(m => m.CharacterBaseStatsPageModule)
      },
      {
        path: 'backpack',
        loadChildren: () => import('./character-backpack/character-backpack.module').then( m => m.CharacterBackpackPageModule)
      },
      {
        path: '',
        redirectTo: '/character/base-stats',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterPageRoutingModule {}
