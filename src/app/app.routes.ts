import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PreLoginComponent } from './pre-login/pre-login.component';
import { DashboardComponent } from './layout/dashboard/dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AuthGuard} from "./guards/auth.guard";



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent,  canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'pre-login', component: PreLoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: UserProfileComponent }
];
