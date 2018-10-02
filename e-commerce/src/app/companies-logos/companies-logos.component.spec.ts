import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesLogosComponent } from './companies-logos.component';

describe('CompaniesLogosComponent', () => {
  let component: CompaniesLogosComponent;
  let fixture: ComponentFixture<CompaniesLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
