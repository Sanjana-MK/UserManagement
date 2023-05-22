import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'users',component:UsersViewComponent},
  {path:'users/add',component:AddUsersComponent},
  {path:'users/edit/:id',component:EditUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
