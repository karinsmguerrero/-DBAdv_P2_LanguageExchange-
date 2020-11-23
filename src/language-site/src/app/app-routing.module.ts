import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportsComponent } from './Administration/reports/reports.component';
import { ProfileComponent } from './Panel/profile/profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'login2', pathMatch: 'full' },
  { path: 'administration', component: ReportsComponent },
  { path: 'login2', component: LoginComponent },
  { path: 'register2', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
