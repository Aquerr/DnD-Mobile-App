import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterBackpackPage } from './character-backpack.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterBackpackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterBackpackPageRoutingModule {}
