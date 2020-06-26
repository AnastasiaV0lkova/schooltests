import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowDeleteRecordComponent } from './window-delete-record.component';

describe('WindowDeleteRecordComponent', () => {
  let component: WindowDeleteRecordComponent;
  let fixture: ComponentFixture<WindowDeleteRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowDeleteRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowDeleteRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
