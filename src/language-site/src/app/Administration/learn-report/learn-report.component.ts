import { Component, OnInit } from '@angular/core';
import { ReportLearn } from 'src/app/Models/report-learn.model';
import{ ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-learn-report',
  templateUrl: './learn-report.component.html',
  styleUrls: ['./learn-report.component.scss']
})
export class LearnReportComponent implements OnInit {

  learnReports : ReportLearn[]=[];
  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.reportService.getLearnReport().then(res => this.learnReports = res);
  }

}
