import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model';
import { LoginService } from "src/app/Services/login.service";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportsService } from 'src/app/Services/reports.service';
import { Contacts } from 'src/app/Models/contacts.model';
@Component({
  selector: 'app-contact-config',
  templateUrl: './contact-config.component.html',
  styleUrls: ['./contact-config.component.scss']
})
export class ContactConfigComponent implements OnInit {

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
  contacts: string[] = ["Whatsapp", "Skype", "Pagina web", "En persona"];
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
    }
    );

    this.form = this.formBuilder.group({
      "user": JSON.parse(localStorage.getItem('user'))[0].user,
      "name": ['', Validators.required],
      "value": ['', Validators.required]
    });
    this.formd = this.formBuilder.group({
      "user": JSON.parse(localStorage.getItem('user'))[0].user,
      "name": ['', Validators.required]
    })
  };

  addContact() {
    this.reportService.addContact(this.form.value).then(res => {
      this.reportService.getUserInfo(JSON.parse(localStorage.getItem('user'))[0].user).then(res => {
        this.user = res[0] as Person;
      });
    });

  }

  deleteContact() {
    this.reportService.deleteContact(this.formd.value);

  }

  deleteContactByTable(name: string) {
    var con: Contacts = {
      user: JSON.parse(localStorage.getItem('user'))[0].user,
      name: name,
      value: ''
    }
    this.reportService.deleteContact(con).then(res => {
      this.reportService.getUserInfo(JSON.parse(localStorage.getItem('user'))[0].user).then(res => {
        this.user = res[0] as Person;
      });
    });
  }

}



