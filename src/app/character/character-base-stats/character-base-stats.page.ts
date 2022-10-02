import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-base-stats',
  templateUrl: './character-base-stats.page.html',
  styleUrls: ['./character-base-stats.page.scss'],
})
export class CharacterBaseStatsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Initializing...');
  }

}
