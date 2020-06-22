import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCreateClassesComponent } from './window-create-classes.component';

describe('WindowCreateClassesComponent', () => {
  let component: WindowCreateClassesComponent;
  let fixture: ComponentFixture<WindowCreateClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowCreateClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowCreateClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
