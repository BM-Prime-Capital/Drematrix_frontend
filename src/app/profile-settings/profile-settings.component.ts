import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [
    NgMultiSelectDropDownModule,
    FormsModule
  ],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss'
})
export class ProfileSettingsComponent implements OnInit {

  dropdownList: object[] = [];
  selectedItems: object[] = [];
  dropdownSettings = {};

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Science' },
      { item_id: 2, item_text: 'Mathematics' },
      { item_id: 3, item_text: 'Physics' },
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'Science' },
      { item_id: 2, item_text: 'Mathematics' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    } as IDropdownSettings;
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
