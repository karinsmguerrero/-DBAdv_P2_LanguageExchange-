import { Component, OnInit } from '@angular/core';
import{ Person } from 'src/app/Models/person.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  user : Person;
  active = 1;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))[0];
    console.log(this.user.name);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login2'],{relativeTo:this.route});
  }
}
