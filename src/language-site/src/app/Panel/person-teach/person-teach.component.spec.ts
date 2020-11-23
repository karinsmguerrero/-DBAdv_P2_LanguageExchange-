import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTeachComponent } from './person-teach.component';

describe('PersonTeachComponent', () => {
  let component: PersonTeachComponent;
  let fixture: ComponentFixture<PersonTeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
