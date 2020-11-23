import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model';
import{ ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-person-teach-desired',
  templateUrl: './person-teach-desired.component.html',
  styleUrls: ['./person-teach-desired.component.scss']
})
export class PersonTeachDesiredComponent implements OnInit {
  users: Person[]=[];
  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.reportService.getLangDesiredTeach(JSON.parse(localStorage.getItem('user'))[0]).then(res => this.users = res);
    console.log(this.users);
  }

}
