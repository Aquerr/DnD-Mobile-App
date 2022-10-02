import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Character} from '../model/character.model';
import {CharacterService} from '../service/character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<Character> {

  constructor(private characterService: CharacterService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character> {
    const character = this.characterService.getCharacter(+route.paramMap.get('id'));
    return of(character);
  }
}
