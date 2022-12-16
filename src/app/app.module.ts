import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CharSheetComponent } from '../app/char-sheet/char-sheet.component';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharIdComponent } from './char-id/char-id.component';
import { CharCharacteristicsComponent } from './char-characteristics/char-characteristics.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CharSheetComponent,
    CharIdComponent,
    CharCharacteristicsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
