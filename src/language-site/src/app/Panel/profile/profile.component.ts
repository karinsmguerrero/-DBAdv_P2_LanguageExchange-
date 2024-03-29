import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
  active = 1;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))[0];
    console.log(this.user.name);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'], { relativeTo: this.route });
  }
}
