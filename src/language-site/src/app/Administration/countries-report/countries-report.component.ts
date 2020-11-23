import { Component, OnInit } from '@angular/core';
import{ ReportCountries } from 'src/app/Models/report-countries.model'
import{ ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-countries-report',
  templateUrl: './countries-report.component.html',
  styleUrls: ['./countries-report.component.scss']
})
export class CountriesReportComponent implements OnInit {


  countries : ReportCountries[] = [];

  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.reportService.getCountriesReport().then(res => this.countries = res);

  }

  
}
