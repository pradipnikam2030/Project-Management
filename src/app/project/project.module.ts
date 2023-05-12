import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowAllProjectComponent } from './show-all-project/show-all-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    ShowAllProjectComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    DashboardComponent,
    ShowAllProjectComponent,
    AddProjectComponent
  ]
})
export class ProjectModule { }
