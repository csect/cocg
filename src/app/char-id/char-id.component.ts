import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-char-id',
  templateUrl: './char-id.component.html',
  styleUrls: ['./char-id.component.css'],
})
export class CharIdComponent implements OnInit {
  @Input() character: Character;
  constructor() {}

  ngOnInit() {}
}
