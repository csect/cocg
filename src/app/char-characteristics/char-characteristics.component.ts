import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-char-characteristics',
  templateUrl: './char-characteristics.component.html',
  styleUrls: ['./char-characteristics.component.css'],
})
export class CharCharacteristicsComponent implements OnInit {
  @Input() character: Character;

  constructor() {}

  ngOnInit() {}
  round(n: number): number {
    return Math.floor(n);
  }
}
