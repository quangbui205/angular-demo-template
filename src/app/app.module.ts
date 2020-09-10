import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login.component';
import { MasterComponent } from './layouts/master/master.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UserListComponent } from './comporents/users/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    NavbarComponent,
    DashboardComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
