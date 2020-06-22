import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCreateSubjectsComponent } from './window-create-subjects.component';

describe('WindowCreateSubjectsComponent', () => {
  let component: WindowCreateSubjectsComponent;
  let fixture: ComponentFixture<WindowCreateSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowCreateSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowCreateSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
