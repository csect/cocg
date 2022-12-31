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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharIdComponent } from './char-id/char-id.component';
import { CharCharacteristicsComponent } from './char-characteristics/char-characteristics.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { CharacteristicComponent } from './characteristic/characteristic.component';
import { CharStatusComponent } from './char-status/char-status.component';
import { PoolStatComponent } from './pool-stat/pool-stat.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatListModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CharSheetComponent,
    CharIdComponent,
    CharCharacteristicsComponent,
    CharacteristicComponent,
    PoolStatComponent,
    CharStatusComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
