import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTeachDesiredComponent } from './person-teach-desired.component';

describe('PersonTeachDesiredComponent', () => {
  let component: PersonTeachDesiredComponent;
  let fixture: ComponentFixture<PersonTeachDesiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTeachDesiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTeachDesiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
