import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/Services/login.service";
import { Person } from "src/app/Models/person.model";
import { ToastrService } from 'ngx-toastr';
import { Country } from "src/app/Models/country";
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  person: Person;
  countries: Country[] = [];
  levels: string[] = ["Principiante", "Intermedio", "Avanzado"];
  sexo: string[] = ["Femenino", "Masculino", "No decir"];
  languages: string[] = ["Español", "Inglés", "Alemán", "Francés", "Ruso", "Portugués", "Italiano", "Nepalí", "Zulú", "Malay"];
  contacts: string[] = ["Whatsapp", "Skype", "Pagina web", "En persona"];
  keyword = "name";
  selectedCountry: Country = {
    name: "seleccione un pais"
  }

  constructor(
    private toastr: ToastrService,
    private logService: LoginService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.logService.getCountries().then(res => this.countries = res);
    this.form = this.formBuilder.group({
      "user": ['', Validators.required],
      "password": ['', [Validators.required, Validators.minLength(4)]],
      "name": ['', Validators.required],
      "lastname1": ['', Validators.required],
      "lastname2": ['', Validators.required],
      "age": ['', Validators.required],
      "sex": ['', Validators.required],
      "country": ['', Validators.required],
      "lang_desired": this.formBuilder.array([this.initTask()]),
      "lang_teach": this.formBuilder.array([this.initTask2()]),
      "hobbies": this.formBuilder.array([this.initTask3()]),
      "contact": this.formBuilder.array([this.initTask4()])

    });
  }
  //////////////////////////////////////////
  initTask() {
    return this.formBuilder.group({
      "name": ['', Validators.required],
      "level": ['', Validators.required]
    });
  }
  subtaskControl() {
    return this.form.get('lang_desired') as FormArray;
  }

  addLink() {
    this.subtaskControl().push(this.initTask());
  }
  removeLink(i: number) {
    this.subtaskControl().removeAt(i);
  }
  //////////////////////////////////////////////////////////////
  initTask2() {
    return this.formBuilder.group({
      "name": ['', Validators.required],
      "level": ['', Validators.required]
    });
  }
  subtaskControl2() {
    return this.form.get('lang_teach') as FormArray;
  }

  addLink2() {
    this.subtaskControl2().push(this.initTask2());
  }
  removeLink2(i: number) {
    this.subtaskControl2().removeAt(i);
  }
  ////////////////////////////////////////////////////////
  initTask3() {
    return this.formBuilder.group({
      "name": ['', Validators.required],
    });
  }
  subtaskControl3() {
    return this.form.get('hobbies') as FormArray;
  }

  addLink3() {
    this.subtaskControl3().push(this.initTask3());
  }
  removeLink3(i: number) {
    this.subtaskControl3().removeAt(i);
  }
  ///////////////////////////////////////////////////////////////////
  initTask4() {
    return this.formBuilder.group({
      "name": ['', Validators.required],
      "value": ['', Validators.required]
    });
  }
  subtaskControl4() {
    return this.form.get('contact') as FormArray;
  }

  addLink4() {
    this.subtaskControl4().push(this.initTask4());
  }
  removeLink4(i: number) {
    this.subtaskControl4().removeAt(i);
  }


  /////////////////////////////////////////////////////////////////////////////////
  selectCountry(item) {
    this.selectCountry = item;
  }
  //////////////////////////////////////////////////////////////////
  registerUser() {
    this.submitted = true;
    if (this.form.invalid) {
      this.toastr.error('No se ha podido registrar', 'Error');
      return;
    }
    this.loading = true;
    this.logService.registerUser(this.form.value).then(res => {
      console.log(res);
    });

    console.log(this.form.value);
    this.router.navigate(['/login'], { relativeTo: this.route });

  }
}
