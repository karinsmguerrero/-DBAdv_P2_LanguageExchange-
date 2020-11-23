import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user.model';
import { environment } from 'src/environments/environment';
import { Country } from '../Models/country';
import { Person } from '../Models/person.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User[] = [];
  countries: Country[] = [];
  constructor(public http: HttpClient, 
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router: Router,) { }

  async login(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      user: user.user,
      password: user.password
    }
    await this.http.post(environment.API + '/login', body, httpOptions).toPromise().then(res =>{
      console.log(res);
      if(res[0].result==2){
        this.toastr.error('El usuario o la contraseña es incorrecto', 'Error');
      }
      else{
        console.log('yes');
        if(localStorage.length > 0){
          localStorage.clear();
        }
        console.log(res[0].name);
        console.log(res[0].sex);
        localStorage.setItem('user',JSON.stringify(res));
        this.router.navigate(['/profile'],{relativeTo:this.route});
        
      }
    }, error => {
      this.toastr.error('No se pudo iniciar sesion', 'Error');
      console.log(error);
    });
    
      
  }
  async getCountries() {
    await this.http.get('https://restcountries.eu/rest/v2/all?fields=name').toPromise().then(res => {
      this.countries = res as Country[];
    }, error => {
      this.toastr.error('No se pudieron cargar los paises', 'Error!');
      console.log(error);
    });
    return this.countries;
  }

  async getUsers() {
    await this.http.get(environment.API + '/users').toPromise().then(res => {
      this.user = res as User[];
      console.log(res);
    }, error => {
      this.toastr.error('No se pudieron cargar los usuarios', 'Error!');
      console.log(error);
    });
    console.log(this.user);
    return this.user;
  }

  async registerUser(person: Person) {
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
      "lang_desired": person.lang_desired,
      "lang_teach":person.lang_teach,
      "hobbies": person.hobbies,
      "contact": person.contact
    }
    console.log(body);
    await this.http.post(environment.API + '/register',body,httpOptions ).toPromise().then(res => {
      console.log(res);
    })
  }

}

  

  
