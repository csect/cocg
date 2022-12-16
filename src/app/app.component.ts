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
  }

  toggleSidebar(): void {
    this.showFiller = !this.showFiller;
    console.log('toggle');
  }
}
