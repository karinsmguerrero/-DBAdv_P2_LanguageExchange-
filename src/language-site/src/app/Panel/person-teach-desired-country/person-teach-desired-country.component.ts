import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model';
import{ ReportsService } from 'src/app/Services/reports.service';
import { Country } from "src/app/Models/country";
import { LoginService } from "src/app/Services/login.service";
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
@Component({
  selector: 'app-person-teach-desired-country',
  templateUrl: './person-teach-desired-country.component.html',
  styleUrls: ['./person-teach-desired-country.component.scss']
})
export class PersonTeachDesiredCountryComponent implements OnInit {
  countries: Country[] =[];
  users: Person[]=[];
  form: FormGroup;
  formAux: FormGroup;
  constructor(private reportService: ReportsService,
              private logService : LoginService,
              private formBuilder: FormBuilder) { }
    //[JSON.parse(localStorage.getItem('user'))[0].lang_desired
  ngOnInit(): void {
    this.logService.getCountries().then(res => this.countries = res);
    this.form = this.formBuilder.group({
      "countries": this.formBuilder.array([this.initTask()]),
      "lang_desired": this.formBuilder.array([JSON.parse(localStorage.getItem('user'))[0].lang_desired]),
      "lang_teach": this.formBuilder.array([JSON.parse(localStorage.getItem('user'))[0].lang_teach])
      
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

  newLangDesire(){
    for(let i in JSON.parse(localStorage.getItem('user'))[0].lang_desired){
      console.log(i);
      
    }
    
  }
  newLangDesireAux(){
    return this.form.get('lang_desired') as FormArray;
  }
  getUsers(){
    this.reportService.getLangDesiredTeachCounntry(this.form.value).then(res => this.users = res);
    console.log(JSON.parse(localStorage.getItem('user'))[0].lang_desired);
    console.log(this.form.value);
    console.log(this.users);
    this.newLangDesire();
  }

}
