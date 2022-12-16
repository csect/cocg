import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-char-sheet',
  templateUrl: './char-sheet.component.html',
  styleUrls: ['./char-sheet.component.css'],
})
export class CharSheetComponent implements OnInit {
  @Input() character: Character;
  constructor() {}

  ngOnInit() {}
}
