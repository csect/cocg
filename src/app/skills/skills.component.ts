import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() character: Character;
  constructor() {}

  ngOnInit() {}
}
