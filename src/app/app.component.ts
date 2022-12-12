import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showFiller: boolean = true;

  toggleSidebar(): void {
    this.showFiller = !this.showFiller;
    console.log('toggle');
  }
}
