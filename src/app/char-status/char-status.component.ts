import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-char-status',
  templateUrl: './char-status.component.html',
  styleUrls: ['./char-status.component.css'],
})
export class CharStatusComponent implements OnInit {
  @Input() character: Character;
  constructor() {}

  ngOnInit() {}
}
