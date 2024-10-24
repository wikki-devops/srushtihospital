import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCtaComponent } from './service-cta.component';

describe('ServiceCtaComponent', () => {
  let component: ServiceCtaComponent;
  let fixture: ComponentFixture<ServiceCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCtaComponent]
    });
    fixture = TestBed.createComponent(ServiceCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
