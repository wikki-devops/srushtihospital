import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TubalBlocksComponent } from './tubal-blocks.component';

describe('TubalBlocksComponent', () => {
  let component: TubalBlocksComponent;
  let fixture: ComponentFixture<TubalBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TubalBlocksComponent]
    });
    fixture = TestBed.createComponent(TubalBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
