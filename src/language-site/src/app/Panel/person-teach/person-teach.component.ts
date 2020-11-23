import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model';
import{ ReportsService } from 'src/app/Services/reports.service';
import { LangDesired} from 'src/app/Models/lang-desired.model';
@Component({
  selector: 'app-person-teach',
  templateUrl: './person-teach.component.html',
  styleUrls: ['./person-teach.component.scss']
})
export class PersonTeachComponent implements OnInit {
  users: Person[]=[];
  desired: LangDesired;
  
  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
   
    this.reportService.getLangTeach(JSON.parse(localStorage.getItem('user'))[0]).then(res => this.users = res);
    console.log(this.users);
  }

}
