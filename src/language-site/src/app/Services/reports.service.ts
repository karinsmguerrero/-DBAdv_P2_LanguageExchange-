import { Injectable } from '@angular/core';
import { ReportCountries } from 'src/app/Models/report-countries.model';
import { ReportLearn } from 'src/app/Models/report-learn.model';
import { ReportTeach } from 'src/app/Models/report-teach.model';
import { Person } from 'src/app/Models/person.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ReportLangAge } from 'src/app/Models/report-lang-age.model';
import { Hobbies } from 'src/app/Models/hobbies.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Contacts } from 'src/app/Models/contacts.model';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  countriesReport: ReportCountries[] = [];
  personReport: Person[] = [];
  learnReport: ReportLearn[] = [];
  teachReport: ReportTeach[] = [];
  userReport: Person[] = [];
  consult34: ReportLangAge[] = [];
  userSession: Person;


  constructor(public http: HttpClient, private toastr: ToastrService, private route: ActivatedRoute,
    private router: Router) { }

  async getUsersReport() {
    await this.http.get(environment.API + '/reports/5').toPromise().then(res => {
      this.personReport = res as Person[];
    }, error => {
      this.toastr.error('No se pudieron cargar los usuarios', 'Error!');
      console.log(error);
    });
    console.log(this.personReport);
    return this.personReport;
  }

  async getCountriesReport() {
    await this.http.get(environment.API + '/reports/6').toPromise().then(res => {
      this.countriesReport = res as ReportCountries[];
    }, error => {
      this.toastr.error('No se pudieron cargar la cantidad de usuarios', 'Error!');
      console.log(error);
    });
    console.log(this.countriesReport);
    return this.countriesReport;
  }

  async getTeachReport() {
    await this.http.get(environment.API + '/reports/7').toPromise().then(res => {
      this.teachReport = res as ReportTeach[];
    }, error => {
      this.toastr.error('No se pudieron cargar la cantidad de usuarios', 'Error!');
      console.log(error);
    });
    console.log(this.teachReport);
    return this.teachReport;
  }

  async getLearnReport() {
    await this.http.get(environment.API + '/reports/8').toPromise().then(res => {
      this.learnReport = res as ReportLearn[];
    }, error => {
      this.toastr.error('No se pudieron cargar la cantidad de usuarios', 'Error!');
      console.log(error);
    });
    console.log(this.learnReport);
    return this.learnReport;
  }

  async getUserInfo(name: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      "user": name
    }
    await this.http.post(environment.API + '/userinfo', body, httpOptions).toPromise().then(res => {
      console.log(res);
      this.userSession = res as Person;

    }, error => {
      this.toastr.error('No existen usuarios con estas caracteristicas', 'Error!');
      console.log(error);
    });
    console.log(this.userSession);
    return this.userSession as Person;
  }


  async getLangTeach(person: Person) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      "user": person.user,
      "password": person.password,
      "name": person.name,
      "lastname1": person.lastname1,
      "lastname2": person.lastname2,
      "age": person.age,
      "sex": person.sex,
      "country": person.country,
      "lang_desired": person.lang_teach,
      "lang_teach": person.lang_teach,
      "hobbies": person.hobbies,
      "contact": person.contact
    }
    console.log(person.lang_teach);
    console.log(body.lang_desired);
    await this.http.post(environment.API + '/reports/1', body, httpOptions).toPromise().then(res => {
      console.log(res);
      this.userReport = res as Person[];
    }, error => {
      this.toastr.error('No existen usuarios con estas caracteristicas', 'Error!');
      console.log(error);
    });
    return this.userReport;
  }

  async getLangDesiredTeach(person: Person) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      "user": person.user,
      "password": person.password,
      "name": person.name,
      "lastname1": person.lastname1,
      "lastname2": person.lastname2,
      "age": person.age,
      "sex": person.sex,
      "country": person.country,
      "lang_desired": person.lang_teach,
      "lang_teach": person.lang_desired,
      "hobbies": person.hobbies,
      "contact": person.contact
    }
    await this.http.post(environment.API + '/reports/2', body, httpOptions).toPromise().then(res => {
      console.log(res);
      this.userReport = res as Person[];
    }, error => {
      this.toastr.error('No existen usuarios con estas caracteristicas', 'Error!');
      console.log(error);
    });
    return this.userReport;
  }
  async getLangDesiredTeachCounntry(person: ReportLangAge) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      countries: person.countries,
      lang_desired: person.lang_teach,
      lang_teach: person.lang_desired
    }
    await this.http.post(environment.API + '/reports/3', body, httpOptions).toPromise().then(res => {
      console.log(res);
      this.userReport = res as Person[];
      console.log(this.userReport);
    }, error => {
      this.toastr.error('No existen usuarios con estas caracteristicas', 'Error!');
      console.log(error);
    });
    return this.userReport;
  }

  async getLangDesiredTeachAge(person: ReportLangAge) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      countries: person.countries,
      lang_desired: person.lang_teach,
      lang_teach: person.lang_desired,
      age: person.age
    }
    await this.http.post(environment.API + '/reports/4', body, httpOptions).toPromise().then(res => {
      console.log(res);
      this.userReport = res as Person[];
      console.log(this.userReport);
    }, error => {
      this.toastr.error('No existen usuarios con estas caracteristicas', 'Error!');
      console.log(error);
    });
    return this.userReport;
  }

  async addHobby(person: Hobbies) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      user: person.user,
      name: person.name
    }
    console.log(body.name);
    await this.http.put(environment.API + '/addHobby', body, httpOptions).toPromise().then(res => {
      console.log(res);
    }, error => {
      this.toastr.error('No se pudo anadir el hobby', 'Error');
      console.log(error);
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  async deleteHobby(person: Hobbies) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: {
        user: person.user,
        name: person.name
      }
    }
    await this.http.request('delete', environment.API + '/deleteHobby', httpOptions).toPromise().then(res => {
      console.log(res);
    }, error => {
      this.toastr.error('No se pudo anadir el hobby', 'Error');
      console.log(error);
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  async addContact(person: Contacts) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      user: person.user,
      name: person.name,
      value: person.value
    }
    console.log(body.name);
    await this.http.put(environment.API + '/addContact', body, httpOptions).toPromise().then(res => {
      console.log(res);
    }, error => {
      this.toastr.error('No se pudo anadir el contacto', 'Error');
      console.log(error);
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  async deleteContact(person: Contacts) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: {
        user: person.user,
        name: person.name
      }
    }
    await this.http.request('delete', environment.API + '/deleteContact', httpOptions).toPromise().then(res => {
      console.log(res);
    }, error => {
      this.toastr.error('No se pudo anadir el contacto', 'Error');
      console.log(error);
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

}
