import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHandleErrorComponent } from './ngx-handle-error.component';

describe('NgxHandleErrorComponent', () => {
  let component: NgxHandleErrorComponent;
  let fixture: ComponentFixture<NgxHandleErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHandleErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHandleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
