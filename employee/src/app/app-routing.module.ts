import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './auth.guard';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'form',component:FormComponent,canActivate:[AuthGuard]},
  {path:'employee-details', component:EmployeeDetailsComponent},
  {path:'updateEmployee', component:UpdateEmployeeComponent},
  {path:'updateEmployee/:id',component:UpdateEmployeeComponent},
  {path:'',component:LoginComponent} 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
