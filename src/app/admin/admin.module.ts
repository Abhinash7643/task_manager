import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from '../myprofile/myprofile.component';
import { AboutComponent } from '../about/about.component';
import { DashbordService } from '../dashbord.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    MyprofileComponent,
    AboutComponent
  ],
  exports:[
    DashboardComponent,
    MyprofileComponent,
    AboutComponent
  ],
  providers:[DashbordService]
})
export class AdminModule { }
