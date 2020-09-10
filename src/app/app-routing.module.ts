import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./layouts/login/login.component";
import {MasterComponent} from "./layouts/master/master.component";
import {DashboardComponent} from "./layouts/dashboard/dashboard.component";
import {UserListComponent} from "./comporents/users/user-list/user-list.component";

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path:'admin',redirectTo:'admin/dashboard', pathMatch:'full'},
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'users',
        children: [
          {path: '',component:UserListComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
