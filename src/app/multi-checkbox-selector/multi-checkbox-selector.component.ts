import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-multi-checkbox-selector',
  templateUrl: './multi-checkbox-selector.component.html',
  styleUrls: ['./multi-checkbox-selector.component.css']
})
export class MultiCheckboxSelectorComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'English' },
      { item_id: 2, item_text: 'Hindi' },
      { item_id: 3, item_text: 'Gujarati' },
      { item_id: 4, item_text: 'Marathi' },
    ];
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    this.change.emit(this.selectedItems);
  }
  onSelectAll(items: any) {
    this.change.emit(this.selectedItems);
  }
}
