import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}