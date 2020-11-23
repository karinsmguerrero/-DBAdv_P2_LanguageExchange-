import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingReportComponent } from './teaching-report.component';

describe('TeachingReportComponent', () => {
  let component: TeachingReportComponent;
  let fixture: ComponentFixture<TeachingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
