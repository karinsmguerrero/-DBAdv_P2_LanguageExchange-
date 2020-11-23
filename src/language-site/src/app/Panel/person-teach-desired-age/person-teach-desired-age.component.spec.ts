import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTeachDesiredAgeComponent } from './person-teach-desired-age.component';

describe('PersonTeachDesiredAgeComponent', () => {
  let component: PersonTeachDesiredAgeComponent;
  let fixture: ComponentFixture<PersonTeachDesiredAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTeachDesiredAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTeachDesiredAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
