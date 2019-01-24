import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDetailsComponent } from './about-us-details.component';

describe('AboutUsDetailsComponent', () => {
  let component: AboutUsDetailsComponent;
  let fixture: ComponentFixture<AboutUsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
