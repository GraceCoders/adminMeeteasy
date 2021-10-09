import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

import { EditUserComponent } from '../../edit-user/edit-user.component';
import { UsersListComponent } from '../../users-list/users-list.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxSpinnerModule } from "ngx-spinner";
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateTimePickerModule} from 'ngx-datetime-picker';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { BusinesslistComponent } from '../../businesslist/businesslist.component';
import { BusinessdetailComponent } from '../../businessdetail/businessdetail.component';
import { CapacityComponent } from '../../capacity/capacity.component';
import { CuisinetypeComponent } from '../../cuisinetype/cuisinetype.component';
import { PriceperheadComponent } from '../../priceperhead/priceperhead.component';
import { VibeComponent } from '../../vibe/vibe.component';
import { FeaturesComponent } from '../../features/features.component';
import { VanuesComponent } from '../../vanues/vanues.component';
import { CategoriesComponent } from '../../categories/categories.component';
import { AddcategoryComponent } from '../../addcategory/addcategory.component';
import { EditcategoryComponent } from '../../editcategory/editcategory.component';
 

@NgModule({
  imports: [
    CommonModule,
    AmazingTimePickerModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
  ],
  declarations: [
    DashboardComponent,
    EditUserComponent,
    UsersListComponent,
    BusinesslistComponent,
    BusinessdetailComponent,
    CapacityComponent,
    CuisinetypeComponent,
    PriceperheadComponent,
    VibeComponent,
    FeaturesComponent,
    VanuesComponent,
    CategoriesComponent,
    AddcategoryComponent,
    EditcategoryComponent
  ]
})

export class AdminLayoutModule {}
