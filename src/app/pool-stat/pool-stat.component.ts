import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-pool-stat',
  templateUrl: './pool-stat.component.html',
  styleUrls: ['./pool-stat.component.css'],
})
export class PoolStatComponent implements OnInit {
  @Input() character: Character;
  @Input() stat: string; //the pool total
  @Input() currStat: string; //current value
  @Input() label: string;
  constructor() {}

  ngOnInit() {}
}
