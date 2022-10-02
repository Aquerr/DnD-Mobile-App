import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character} from '../model/character.model';

@Component({
  selector: 'app-character-base-stats',
  templateUrl: './character-base-stats.page.html',
  styleUrls: ['./character-base-stats.page.scss'],
})
export class CharacterBaseStatsPage implements OnInit {

  character: Character;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({character}) => {
      this.character = character;
    });
  }
}
