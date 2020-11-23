import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model';
import { LoginService } from "src/app/Services/login.service";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportsService } from 'src/app/Services/reports.service';


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
      console.log(this.user.hobbies);
      console.log(res)
    }
    );

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
    console.log(this.form.value.name);
    this.reportService.addHobby(this.form.value);
  }

  deleteHobby() {
    this.reportService.deleteHobby(this.formd.value);

  }

}
