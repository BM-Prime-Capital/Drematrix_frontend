import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PreLoginComponent } from './pre-login/pre-login.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import {DashboardModule} from "./layout/dashboard/dashboard.module";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent,
    RegistrationComponent,
    PreLoginComponent,
    RouterOutlet,
    RouterLink,
    DashboardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dreametrix_frontend';
}
