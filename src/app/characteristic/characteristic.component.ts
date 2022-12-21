import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.css'],
})
export class CharacteristicComponent implements OnInit {
  @Input() character: Character;
  @Input() stat: string;
  @Input() label: string;
  constructor() {}

  ngOnInit() {}
  round(n: number): number {
    return Math.floor(n);
  }
}
