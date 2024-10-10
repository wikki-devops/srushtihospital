import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvfPackageComponent } from './ivf-package.component';

describe('IvfPackageComponent', () => {
  let component: IvfPackageComponent;
  let fixture: ComponentFixture<IvfPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IvfPackageComponent]
    });
    fixture = TestBed.createComponent(IvfPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
