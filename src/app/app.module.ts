import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { RevenueReportsComponent } from './revenue-reports/revenue-reports.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { DentalOfficeComponent } from './dental-office/dental-office.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { PrintReportsComponent } from './print-reports/print-reports.component';
import { NurseIndexComponent } from './-nurse-index/-nurse-index.component';
import { DentistIndexComponent } from './-dentist-index/-dentist-index.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicalRecordComponent,
    RevenueReportsComponent,
    PatientInformationComponent,
    DentalOfficeComponent,
    DoctorAppointmentComponent,
    PrintReportsComponent,
    NurseIndexComponent,
    DentistIndexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
