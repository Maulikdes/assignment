import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCheckboxSelectorComponent } from './multi-checkbox-selector.component';

describe('MultiCheckboxSelectorComponent', () => {
  let component: MultiCheckboxSelectorComponent;
  let fixture: ComponentFixture<MultiCheckboxSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCheckboxSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCheckboxSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
