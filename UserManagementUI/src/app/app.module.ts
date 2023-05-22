import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUsersComponent } from './components/add-users/add-users.component';
import {FormsModule} from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent,
    AddUsersComponent,
    EditUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
