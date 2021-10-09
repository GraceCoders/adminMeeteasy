import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreLayoutRoutes } from './store-layout.rounting';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DateTimePickerModule } from 'ngx-datetime-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    // CatagoryListComponent
  ],
  imports: [
    CommonModule,
    AmazingTimePickerModule,
    RouterModule.forChild(StoreLayoutRoutes),
    NgMultiSelectDropDownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    CKEditorModule,
    DateTimePickerModule,
    NgbModule.forRoot(),
    GooglePlaceModule,
    ChartsModule
  ]
})
export class StoreLayoutModule { }
