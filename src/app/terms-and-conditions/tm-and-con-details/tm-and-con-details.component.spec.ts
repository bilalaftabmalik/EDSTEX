import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmAndConDetailsComponent } from './tm-and-con-details.component';

describe('TmAndConDetailsComponent', () => {
  let component: TmAndConDetailsComponent;
  let fixture: ComponentFixture<TmAndConDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmAndConDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmAndConDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
