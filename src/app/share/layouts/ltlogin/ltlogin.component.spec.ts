import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtloginComponent } from './ltlogin.component';

describe('LtloginComponent', () => {
  let component: LtloginComponent;
  let fixture: ComponentFixture<LtloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
