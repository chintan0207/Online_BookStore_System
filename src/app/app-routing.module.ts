import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},

  {path: 'admin', loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)},
  {path: 'customer', loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule)}



  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
