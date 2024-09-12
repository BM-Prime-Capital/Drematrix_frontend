import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent,
    RegistrationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dreametrix_frontend';
}
