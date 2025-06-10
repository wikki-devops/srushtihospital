import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndometriosisComponent } from './endometriosis.component';

describe('EndometriosisComponent', () => {
  let component: EndometriosisComponent;
  let fixture: ComponentFixture<EndometriosisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndometriosisComponent]
    });
    fixture = TestBed.createComponent(EndometriosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
