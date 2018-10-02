import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistAdComponent } from './productlist-ad.component';

describe('ProductlistAdComponent', () => {
  let component: ProductlistAdComponent;
  let fixture: ComponentFixture<ProductlistAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
