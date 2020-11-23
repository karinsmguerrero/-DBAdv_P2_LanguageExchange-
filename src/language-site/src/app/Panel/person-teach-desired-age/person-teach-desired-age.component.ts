import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model';
import{ ReportsService } from 'src/app/Services/reports.service';
import { Country } from "src/app/Models/country";
import { LoginService } from "src/app/Services/login.service";
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { ReportLangAge } from 'src/app/Models/report-lang-age.model';

@Component({
  selector: 'app-person-teach-desired-age',
  templateUrl: './person-teach-desired-age.component.html',
  styleUrls: ['./person-teach-desired-age.component.scss']
})
export class PersonTeachDesiredAgeComponent implements OnInit {
  countries: Country[] =[];
  users: Person[]=[];
  form: FormGroup;
  formAux: FormGroup;
 // person: ReportLangAge;
  constructor(private reportService: ReportsService,
    private logService : LoginService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.logService.getCountries().then(res => this.countries = res);
    this.form = this.formBuilder.group({
      "countries": this.formBuilder.array([this.initTask()]),
      "lang_desired": this.formBuilder.array([JSON.parse(localStorage.getItem('user'))[0].lang_desired]),
      "lang_teach": this.formBuilder.array([JSON.parse(localStorage.getItem('user'))[0].lang_teach]),
      "ageMin": ['', Validators.required],
      "ageMax": ['', Validators.required]

      
  });
  }

  initTask() {
    return this.formBuilder.group({
        "name": ['', Validators.required]
    });
  } 
   subtaskControl () {
    return this.form.get('countries') as FormArray;
  }
  
  addLink() {
    this.subtaskControl().push(this.initTask());
  }
  removeLink(i: number) {
    this.subtaskControl().removeAt(i);
  }
  ////////////////////////////////////////////////////
   getUsers(){
     var person: ReportLangAge={
        lang_desired : this.form.value.lang_desired,
        lang_teach : this.form.value.lang_teach,
        countries : this.form.value.countries,
        age: [this.form.value.ageMin,this.form.value.ageMax]
     };
     console.log(person.lang_desired);
     console.log(person.age);
     this.reportService.getLangDesiredTeachAge(person).then(res => this.users = res);
    

   }
}
