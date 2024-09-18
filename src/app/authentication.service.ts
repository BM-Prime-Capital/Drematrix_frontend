import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterResponse } from './interfaces/register';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://dream-mast.onrender.com/api'; // To be changed later with environment variables to make it dynamic

  constructor(private http: HttpClient) {}


  // Just a function placeholder, you can override it and implement it your way
  login(email: string, password: string): {}

  register(email: string, password: string): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/create`, {email, password})
  }
}
