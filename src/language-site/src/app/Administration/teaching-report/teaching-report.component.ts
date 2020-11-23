import { Component, OnInit } from '@angular/core';
import { ReportTeach } from 'src/app/Models/report-teach.model';
import{ ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-teaching-report',
  templateUrl: './teaching-report.component.html',
  styleUrls: ['./teaching-report.component.scss']
})
export class TeachingReportComponent implements OnInit {

  teachReports : ReportTeach[]=[];
  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.reportService.getTeachReport().then(res => this.teachReports = res);
  }

}
