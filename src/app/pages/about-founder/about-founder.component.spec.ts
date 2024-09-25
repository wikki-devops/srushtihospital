import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFounderComponent } from './about-founder.component';

describe('AboutFounderComponent', () => {
  let component: AboutFounderComponent;
  let fixture: ComponentFixture<AboutFounderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutFounderComponent]
    });
    fixture = TestBed.createComponent(AboutFounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
