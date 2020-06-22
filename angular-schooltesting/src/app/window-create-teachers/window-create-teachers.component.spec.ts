import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCreateTeachersComponent } from './window-create-teachers.component';

describe('WindowCreateTeachersComponent', () => {
  let component: WindowCreateTeachersComponent;
  let fixture: ComponentFixture<WindowCreateTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowCreateTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowCreateTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
