import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PreLoginComponent } from './pre-login/pre-login.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pre-login', component: PreLoginComponent },
  { path: 'registration', component: RegistrationComponent }
];
