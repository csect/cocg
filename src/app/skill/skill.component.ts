import { Component, Input, OnInit } from '@angular/core';
import { Character, Skill } from '../model/character.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  @Input() character: Character;
  @Input() stat: string;
  public skill: Skill;

  constructor() {}

  ngOnInit() {
    this.skill = this.character.skills[this.stat];
  }
}
