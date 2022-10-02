import {Injectable} from '@angular/core';
import {Background, Character, Race} from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  charactersStorage: Character[] = [
    this.prepareTestCharacter(1, 'Stefan Batory'),
    this.prepareTestCharacter(2, 'Ruby')
  ];

  constructor() { }

  getCharacters(): Character[] {
    return this.charactersStorage;
  }

  getCharacter(id: number): Character {
    return this.charactersStorage.find(character => character.id === id);
  }

  private prepareTestCharacter(id: number, name: string): Character {
    const character: Character = new Character();
    character.id = id;
    character.name = name;
    character.avatarBase64 = 'mdasiodmasio';
    character.race = new Race();
    character.background = new Background();
    return character;
  }
}
