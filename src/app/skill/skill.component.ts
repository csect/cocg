import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  @Input() character: Character;
  @Input() stat: string;
  constructor() {}

  ngOnInit() {}
}
