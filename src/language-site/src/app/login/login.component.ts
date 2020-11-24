import { Component, OnInit } from '@angular/core';
import { User } from "src/app/Models/user.model"
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { from } from 'rxjs';
import { Country } from "src/app/Models/country";
import { LoginService } from "src/app/Services/login.service";

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User={
    user: 'jimmy',
    password:'1234'
  };

  form: FormGroup;
  constructor(
    private toastr: ToastrService, 
    private reportL : LoginService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }

 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      "user": ['', Validators.required],
      "password": ['', [Validators.required, Validators.minLength(4)]] 
    });
  }

  getUsers(){
    this.reportL.getUsers(),
    localStorage
  }
  
  login(){
    if(this.form.value.user != "" && this.form.value.password != "")
      this.reportL.login(this.form.value);
    else
      this.toastr.error('Ingrese usuario y contraseña', 'Error');
  }
  

  

}
