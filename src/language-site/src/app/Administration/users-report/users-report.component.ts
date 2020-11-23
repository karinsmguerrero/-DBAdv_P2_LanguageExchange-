import { Component, OnInit } from '@angular/core';
import{ Person } from 'src/app/Models/person.model'
import{ ReportsService } from 'src/app/Services/reports.service';
@Component({
  selector: 'app-users-report',
  templateUrl: './users-report.component.html',
  styleUrls: ['./users-report.component.scss']
})
export class UsersReportComponent implements OnInit {

  personReport : Person [] = [];

  
  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.reportService.getUsersReport().then(res => this.personReport = res);
  }
}
