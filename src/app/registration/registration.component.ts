import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';
import { ToastService } from '../services/toast.service';
import { FormControl, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {

  formSubmitted: boolean = false;

  registrationForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  })

  constructor(private authService: AuthenticationService, private router: Router, private toastService: ToastService ){}

  setFormAsSubmitted(): void {
    this.formSubmitted = true;
  };
  
  onSubmit(): void {
    const email = this.registrationForm.value.email ?? '';
    const password = this.registrationForm.value.password ?? '';
    console.log("Submitted data from client", email, password);
    this.setFormAsSubmitted();

    if (this.registrationForm.valid) {
      this.authService.register(email, password).subscribe({
        next: (response) => {
          console.log("Response", response);
          if (response.status === 201) {
            this.toastService.showSuccessMessage("Account created successfully");
          }
        },
        error: (error) => {
          if (error.status === 400) {
            console.log("Error object", error);
            console.log("Error body", error.error);
            console.log("Error key", error.error?.email)
            const message = error.error?.email[0];
            this.toastService.showErrorMessage(message);
          }
        }
      })
    }
  }
}