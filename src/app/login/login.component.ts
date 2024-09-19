import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import {FormsModule, NgForm} from "@angular/forms";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router){

  }

  onSubmit(loginForm: NgForm) {
    const {email, password} = loginForm.value;
    console.log(email, password)
    this.authService.login(email, password).subscribe(
      {
        next: (response) =>{
          console.log('Login successful, token:', response.token);
          // You can store the token, like in localStorage
          this.router.navigate(['/home']);
        },
        error : (err)=>{
          console.log('login failled', err)
        }
      }
    );
  }

}
