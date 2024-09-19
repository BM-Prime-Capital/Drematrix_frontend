import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';  // Import tap to handle side effects
import { RegisterResponse } from './interfaces/register';
import { LoginResponse } from "./interfaces/login";
import { User } from "./models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://dream-mast.onrender.com/api'; // @TODO: Use environment variables for dynamic API URL
  private isAuthenticated = false; // Default false

  constructor(private http: HttpClient) {}

  // Function to check if user is authenticated
  getAuthStatus(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('token');  // Check local storage for token
  }

  // Login function
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response: LoginResponse) => {
          if (response && response.token) {  // Assuming your login response contains a token
            this.isAuthenticated = true;
            localStorage.setItem('token', response.token);  // Save token to local storage
          }
        })
      );
  }

  // Logout function
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('token');  // Remove token from local storage on logout
  }

  // Registration function
  register(email: string, password: string): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/create`, { email, password });
  }
}
