import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCreateAdministratorsComponent } from './window-create-administrators.component';

describe('WindowCreateAdministratorsComponent', () => {
  let component: WindowCreateAdministratorsComponent;
  let fixture: ComponentFixture<WindowCreateAdministratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowCreateAdministratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowCreateAdministratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
