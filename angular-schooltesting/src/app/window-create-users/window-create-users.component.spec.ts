import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCreateUsersComponent } from './window-create-users.component';

describe('WindowCreateUsersComponent', () => {
  let component: WindowCreateUsersComponent;
  let fixture: ComponentFixture<WindowCreateUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowCreateUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowCreateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
