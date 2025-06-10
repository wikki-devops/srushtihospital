import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UterineFibroidsComponent } from './uterine-fibroids.component';

describe('UterineFibroidsComponent', () => {
  let component: UterineFibroidsComponent;
  let fixture: ComponentFixture<UterineFibroidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UterineFibroidsComponent]
    });
    fixture = TestBed.createComponent(UterineFibroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
