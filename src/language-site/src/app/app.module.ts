import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Component, OnInit } from '@angular/core';
import { User } from "src/app/Models/user.model"
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { from } from 'rxjs';
import { Country } from "src/app/Models/country";
import { LoginService } from "src/app/Services/login.service";
import { report } from 'process';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UsersReportComponent } from './Administration/users-report/users-report.component';
import { CountriesReportComponent } from './Administration/countries-report/countries-report.component';
import { TeachingReportComponent } from './Administration/teaching-report/teaching-report.component';
import { LearnReportComponent } from './Administration/learn-report/learn-report.component';
import { ReportsComponent } from './Administration/reports/reports.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './Panel/profile/profile.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { PersonTeachComponent } from './Panel/person-teach/person-teach.component';
import { PersonTeachDesiredComponent } from './Panel/person-teach-desired/person-teach-desired.component';
import { PersonTeachDesiredCountryComponent } from './Panel/person-teach-desired-country/person-teach-desired-country.component';
import { PersonTeachDesiredAgeComponent } from './Panel/person-teach-desired-age/person-teach-desired-age.component';
import { HobbyConfigComponent } from './Panel/hobby-config/hobby-config.component';
import { ContactConfigComponent } from './Panel/contact-config/contact-config.component';
import { NavigationComponent } from './Extra/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersReportComponent,
    CountriesReportComponent,
    TeachingReportComponent,
    LearnReportComponent,
    ReportsComponent,
    ProfileComponent,
    PersonTeachComponent,
    PersonTeachDesiredComponent,
    PersonTeachDesiredCountryComponent,
    PersonTeachDesiredAgeComponent,
    HobbyConfigComponent,
    ContactConfigComponent,
    NavigationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AutocompleteLibModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
