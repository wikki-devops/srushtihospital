import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcosComponent } from './pcos.component';

describe('PcosComponent', () => {
  let component: PcosComponent;
  let fixture: ComponentFixture<PcosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcosComponent]
    });
    fixture = TestBed.createComponent(PcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
