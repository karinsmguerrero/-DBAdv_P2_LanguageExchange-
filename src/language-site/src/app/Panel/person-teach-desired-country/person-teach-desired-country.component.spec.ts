import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTeachDesiredCountryComponent } from './person-teach-desired-country.component';

describe('PersonTeachDesiredCountryComponent', () => {
  let component: PersonTeachDesiredCountryComponent;
  let fixture: ComponentFixture<PersonTeachDesiredCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTeachDesiredCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTeachDesiredCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
