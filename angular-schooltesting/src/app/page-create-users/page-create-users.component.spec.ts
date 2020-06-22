import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateUsersComponent } from './page-create-users.component';

describe('PageCreateUsersComponent', () => {
  let component: PageCreateUsersComponent;
  let fixture: ComponentFixture<PageCreateUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreateUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
