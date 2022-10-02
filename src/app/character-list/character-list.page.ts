import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../character/service/character.service';
import {Character} from '../character/model/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  newCharacterClick() {
    console.log('Preparing new character window...');
  }
}
