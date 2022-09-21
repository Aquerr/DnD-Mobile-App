import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  abilityScores: AbilityScore[] = [
    new AbilityScore("Strength", 8, 2),
    new AbilityScore("Intelligence", 13, 1),
    new AbilityScore("Dexterity", 20, 8),
    new AbilityScore("Wisdom", 14, 2),
    new AbilityScore("Constitution", 14, 2),
    new AbilityScore("Charisma", 11, 0)
  ];

  constructor() {}
}

export class AbilityScore {
  name: string;
  score: number;
  save: number;

  constructor(name: string, score: number, save: number) {
    this.name = name;
    this.score = score;
    this.save = save;
  }

  get modifier() {
    return this.score / 2 - 5;
  }

  // modifier(): number {
}
