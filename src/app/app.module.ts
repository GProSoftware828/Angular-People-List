import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person.component';
import { SizerComponent } from './sizer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PersonComponent, SizerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
