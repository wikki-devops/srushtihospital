import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductiveSurgeryComponent } from './reproductive-surgery.component';

describe('ReproductiveSurgeryComponent', () => {
  let component: ReproductiveSurgeryComponent;
  let fixture: ComponentFixture<ReproductiveSurgeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReproductiveSurgeryComponent]
    });
    fixture = TestBed.createComponent(ReproductiveSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
