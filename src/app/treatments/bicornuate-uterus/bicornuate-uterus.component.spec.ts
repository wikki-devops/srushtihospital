import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicornuateUterusComponent } from './bicornuate-uterus.component';

describe('BicornuateUterusComponent', () => {
  let component: BicornuateUterusComponent;
  let fixture: ComponentFixture<BicornuateUterusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BicornuateUterusComponent]
    });
    fixture = TestBed.createComponent(BicornuateUterusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
