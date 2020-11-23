import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyConfigComponent } from './hobby-config.component';

describe('HobbyConfigComponent', () => {
  let component: HobbyConfigComponent;
  let fixture: ComponentFixture<HobbyConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
