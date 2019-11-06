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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { FormComponent } from './person.form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SizerComponent,
    AlertSuccessComponent,
    AlertFailureComponent,
    EmployeeComponent,
    FormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertSuccessComponent, AlertFailureComponent]
})
export class AppModule {}
