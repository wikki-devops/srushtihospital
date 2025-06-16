import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySrushtiComponent } from './why-srushti.component';

describe('WhySrushtiComponent', () => {
  let component: WhySrushtiComponent;
  let fixture: ComponentFixture<WhySrushtiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhySrushtiComponent]
    });
    fixture = TestBed.createComponent(WhySrushtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
