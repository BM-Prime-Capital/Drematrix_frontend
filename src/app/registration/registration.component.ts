import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastService } from '../services/toast.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {

  registrationForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private authService: AuthenticationService, private router: Router, private toastService: ToastService ){}

  onSubmit(): void {
    const email = this.registrationForm.value.email ?? '';
    const password = this.registrationForm.value.password ?? '';
    console.log("Submitted data from client", email, password);

    this.authService.register(email, password).subscribe({
      next: (response) => {
        console.log("Response", response)
        if (response.status === 201) {
          this.toastService.showSuccessMessage("Account created successfully");
        }
      },
      error: (error) => {
        console.log("Error", error);
        return "Encountered an issue when creating account";
      }
    })
  }
}
