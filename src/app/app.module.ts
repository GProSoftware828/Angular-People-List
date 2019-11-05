import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  AlertSuccessComponent,
  AlertFailureComponent
} from './app.component';
import { PersonComponent } from './person.component';
import { SizerComponent } from './sizer.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SizerComponent,
    AlertSuccessComponent,
    AlertFailureComponent,
    EmployeeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertSuccessComponent, AlertFailureComponent]
})
export class AppModule {}
