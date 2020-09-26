import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchSelectorComponent } from './batch-selector.component';

describe('BatchSelectorComponent', () => {
  let component: BatchSelectorComponent;
  let fixture: ComponentFixture<BatchSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
