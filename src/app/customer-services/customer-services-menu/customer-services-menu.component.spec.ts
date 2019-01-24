import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServicesMenuComponent } from './customer-services-menu.component';

describe('CustomerServicesMenuComponent', () => {
  let component: CustomerServicesMenuComponent;
  let fixture: ComponentFixture<CustomerServicesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServicesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServicesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
