import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMenu1Component } from './service-menu-1.component';

describe('ServiceMenu1Component', () => {
  let component: ServiceMenu1Component;
  let fixture: ComponentFixture<ServiceMenu1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceMenu1Component]
    });
    fixture = TestBed.createComponent(ServiceMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
