import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import {FormsModule, NgForm} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    CommonModule,
    LoaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router, private toastService: ToastService){}

  isLoading : boolean = false;
  formSubmitted : boolean = false;

  onSubmit(loginForm: NgForm) {
    const {email, password} = loginForm.value;
    console.log(email, password)
    this.formSubmitted = true;
    this.isLoading = true;
    console.log("Log result", loginForm.valid)
    if (!loginForm.valid) {
      this.isLoading = false;
      return
    }
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
          this.toastService.showErrorMessage("Please verify your credentials");
        }
      }
    );
    loginForm.reset();
  }

}
