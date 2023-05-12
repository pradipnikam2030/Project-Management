import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    //  {
    //   path:'login',
    //   component:LoginUserComponent
    //  },
    //  {
    //   path:'register',
    //   component:RegisterUserComponent
    //  },
    //  {
    //   path:'dashboard',
    //   component:DashboardComponent
    //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
