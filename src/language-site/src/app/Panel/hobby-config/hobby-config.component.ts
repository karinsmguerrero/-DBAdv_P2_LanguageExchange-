import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model';
import { LoginService } from "src/app/Services/login.service";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportsService } from 'src/app/Services/reports.service';
import { Hobbies } from 'src/app/Models/hobbies.model';


@Component({
  selector: 'app-hobby-config',
  templateUrl: './hobby-config.component.html',
  styleUrls: ['./hobby-config.component.scss']
})
export class HobbyConfigComponent implements OnInit {
  formAdd: FormGroup;
  formDelete: FormGroup;
  user: Person = {
    user: "",
    password: "",
    name: "",
    lastname1: "",
    lastname2: "",
    age: 0,
    sex: "",
    country: "",
    lang_desired: null,
    lang_teach: null,
    hobbies: null,
    contact: null
  };
  form: FormGroup;
  formd: FormGroup;
  constructor(
    private toastr: ToastrService,
    private logService: LoginService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportsService

  ) { }


  ngOnInit(): void {
    this.reportService.getUserInfo(JSON.parse(localStorage.getItem('user'))[0].user).then(res => {
      this.user = res[0] as Person;
    });

    this.form = this.formBuilder.group({
      "user": JSON.parse(localStorage.getItem('user'))[0].user,
      "name": ['', Validators.required]
    });
    this.formd = this.formBuilder.group({
      "user": JSON.parse(localStorage.getItem('user'))[0].user,
      "name": ['', Validators.required]
    })
  };
  //////////////////////////////////////////////////////
  addHobby() {
    this.reportService.addHobby(this.form.value);
    this.reportService.getUserInfo(JSON.parse(localStorage.getItem('user'))[0].user).then(res => {
      this.user = res[0] as Person;
    });
  }

  deleteHobby() {
    this.reportService.deleteHobby(this.formd.value);
    this.reportService.getUserInfo(JSON.parse(localStorage.getItem('user'))[0].user).then(res => {
      this.user = res[0] as Person;
    });

  }

  
  deleteHobbyByTable( name : string) {
    var hob : Hobbies = {
      user : JSON.parse(localStorage.getItem('user'))[0].user,
      name : name
    }
    this.reportService.deleteHobby(hob).then( res => {
      this.reportService.getUserInfo(JSON.parse(localStorage.getItem('user'))[0].user).then(res => {
        this.user = res[0] as Person;
      });
    });
  }

}
