import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BatchSelectorComponent } from './batch-selector/batch-selector.component'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultiCheckboxSelectorComponent } from './multi-checkbox-selector/multi-checkbox-selector.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoSelectorComponent } from './photo-selector/photo-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    DatePickerComponent,
    BatchSelectorComponent,
    MultiCheckboxSelectorComponent,
    PhotoSelectorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
