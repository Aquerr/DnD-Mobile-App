import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterBaseStatsPageRoutingModule } from './character-base-stats-routing.module';

import { CharacterBaseStatsPage } from './character-base-stats.page';
import {ExploreContainerComponentModule} from "../../explore-container/explore-container.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterBaseStatsPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [CharacterBaseStatsPage]
})
export class CharacterBaseStatsPageModule {}
