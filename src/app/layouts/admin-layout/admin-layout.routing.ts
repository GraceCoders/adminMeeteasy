import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EditUserComponent } from '../../edit-user/edit-user.component';

import { UsersListComponent } from '../../users-list/users-list.component';
import { AuthGuardService } from '../../guards/auth-guard.service';
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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent ,canActivate: [AuthGuardService]},
    { path: 'users',          component: UsersListComponent, canActivate:[AuthGuardService]},
    { path: 'edit-user',      component:EditUserComponent, canActivate:[AuthGuardService]},
    { path: 'businesslist',      component:BusinesslistComponent, canActivate:[AuthGuardService]},
    { path: 'businessdetail',      component:BusinessdetailComponent, canActivate:[AuthGuardService]},
    { path: 'Vanues',      component:VanuesComponent, canActivate:[AuthGuardService]},

    { path: 'Capacity',      component: CapacityComponent ,canActivate: [AuthGuardService]},
    { path: 'Cuisinetype',          component: CuisinetypeComponent, canActivate:[AuthGuardService]},
    { path: 'Priceperhead',      component:PriceperheadComponent, canActivate:[AuthGuardService]},
    { path: 'Vibe',      component:VibeComponent, canActivate:[AuthGuardService]},
    { path: 'Features',      component:FeaturesComponent, canActivate:[AuthGuardService]},
    {path: 'Categories', component:CategoriesComponent,canActivate:[AuthGuardService]},
    { path: 'add-catagory',      component: AddcategoryComponent},
    {path:'edit-category',component:EditcategoryComponent}
    
    // { path: '**',redirectTo: ''}
];


