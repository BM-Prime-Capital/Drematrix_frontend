import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import {FormsModule, NgForm} from "@angular/forms";
import { LoaderComponent } from '../loader/loader.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    LoaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router){}

  isLoading : boolean = false;

  onSubmit(loginForm: NgForm) {
    const {email, password} = loginForm.value;
    console.log(email, password)
    this.isLoading = true;
    this.authService.login(email, password).subscribe(
      {
        next: (response) =>{
          console.log('Login successful, token:', response.token);
          this.isLoading = false;
          // You can store the token, like in localStorage
          this.router.navigate(['/home']);
        },
        error : (err)=>{
          console.log('login failled', err)
          this.isLoading = false;
        }
      }
    );
    loginForm.reset();
  }

}
