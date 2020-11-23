import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnReportComponent } from './learn-report.component';

describe('LearnReportComponent', () => {
  let component: LearnReportComponent;
  let fixture: ComponentFixture<LearnReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
