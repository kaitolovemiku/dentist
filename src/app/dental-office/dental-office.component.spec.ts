import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalOfficeComponent } from './dental-office.component';

describe('DentalOfficeComponent', () => {
  let component: DentalOfficeComponent;
  let fixture: ComponentFixture<DentalOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
