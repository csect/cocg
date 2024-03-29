import { Component, VERSION } from '@angular/core';
import { Character } from './model/character.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showFiller: boolean = true;
  currCharacter: Character = new Character();

  ngOnInit() {
    this.currCharacter.char_info.m_name = 'Test Char 1';
    this.currCharacter.char_info.m_birthplace = 'Birthplace1';
    this.currCharacter.char_info.m_pronoun = 'He/Him';
    this.currCharacter.char_info.m_occupation = 'Job 1';
    this.currCharacter.char_info.m_residence = 'House 1';
    this.currCharacter.char_info.m_age = 23;

    this.currCharacter.characteristics.m_strength = 25;
    this.currCharacter.characteristics.m_size = 26;
    this.currCharacter.characteristics.m_hp = 27;
  }

  toggleSidebar(): void {
    this.showFiller = !this.showFiller;
    console.log('toggle');
  }
}
