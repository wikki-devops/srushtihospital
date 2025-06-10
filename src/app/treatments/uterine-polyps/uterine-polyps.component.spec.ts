import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UterinePolypsComponent } from './uterine-polyps.component';

describe('UterinePolypsComponent', () => {
  let component: UterinePolypsComponent;
  let fixture: ComponentFixture<UterinePolypsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UterinePolypsComponent]
    });
    fixture = TestBed.createComponent(UterinePolypsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
