import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Students, Address, Subjects, Addresses } from './student';

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
import { AgePipe } from './custom.pipe';
import { JoinPipe } from './join.pipe';
import { ShowAlertDirective } from './showalert.directive';
import { WorkerComponent } from './worker-component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SizerComponent,
    AlertSuccessComponent,
    AlertFailureComponent,
    EmployeeComponent,
    FormComponent,
    AgePipe,
    JoinPipe,
    ShowAlertDirective,
    WorkerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [Students, { provide: Address, useClass: Addresses }, Subjects],
  bootstrap: [AppComponent],
  entryComponents: [AlertSuccessComponent, AlertFailureComponent]
})
export class AppModule {}
