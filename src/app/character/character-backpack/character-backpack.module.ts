import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterBackpackPageRoutingModule } from './character-backpack-routing.module';

import { CharacterBackpackPage } from './character-backpack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterBackpackPageRoutingModule
  ],
  declarations: [CharacterBackpackPage]
})
export class CharacterBackpackPageModule {}
