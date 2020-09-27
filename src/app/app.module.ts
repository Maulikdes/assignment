import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent, ExampleHeader } from './date-picker/date-picker.component';
import { BatchSelectorComponent } from './batch-selector/batch-selector.component'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MultiCheckboxSelectorComponent } from './multi-checkbox-selector/multi-checkbox-selector.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoSelectorComponent } from './photo-selector/photo-selector.component';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  entryComponents: [ExampleHeader],
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    DatePickerComponent,
    BatchSelectorComponent,
    MultiCheckboxSelectorComponent,
    PhotoSelectorComponent,
    ExampleHeader
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NoopAnimationsModule,

    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
