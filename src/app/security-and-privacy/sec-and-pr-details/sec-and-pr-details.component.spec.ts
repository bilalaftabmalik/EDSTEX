import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAndPrDetailsComponent } from './sec-and-pr-details.component';

describe('SecAndPrDetailsComponent', () => {
  let component: SecAndPrDetailsComponent;
  let fixture: ComponentFixture<SecAndPrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecAndPrDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAndPrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
