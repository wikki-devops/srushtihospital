import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvarianCystsComponent } from './ovarian-cysts.component';

describe('OvarianCystsComponent', () => {
  let component: OvarianCystsComponent;
  let fixture: ComponentFixture<OvarianCystsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OvarianCystsComponent]
    });
    fixture = TestBed.createComponent(OvarianCystsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
