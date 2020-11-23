import { Component, OnInit } from '@angular/core';
import{ Person } from 'src/app/Models/person.model';
import { LoginService } from "src/app/Services/login.service";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import{ ReportsService } from 'src/app/Services/reports.service';
@Component({
  selector: 'app-contact-config',
  templateUrl: './contact-config.component.html',
  styleUrls: ['./contact-config.component.scss']
})
export class ContactConfigComponent implements OnInit {

  formAdd: FormGroup;
  formDelete: FormGroup;
  user : Person;
  form: FormGroup;
  formd: FormGroup;
  constructor(
    private toastr: ToastrService,
    private logService : LoginService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportsService

  ) { }
  

  ngOnInit(): void {
    this.reportService.getUserInfo(JSON.parse(localStorage.getItem('user'))[0].user).then(res => {
      this.user = res[0] as Person;
      console.log(this.user.contact);
      console.log(res)}
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

  addContact(){
    console.log(this.form.value.name);
    this.reportService.addContact(this.form.value);
  }

  deleteContact(){
    this.reportService.deleteContact(this.formd.value);

  }
}



