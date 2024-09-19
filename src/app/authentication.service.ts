import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterResponse } from './interfaces/register';
import {LoginResponse} from "./interfaces/login";
import {User} from "./models/User";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://dream-mast.onrender.com/api'; // @TODO: To be changed later with environment variables to make it dynamic

  constructor(private http: HttpClient) {}

  // Just a function placeholder, you can override it and implement it your way
  login(email: string, password : string): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {email, password})
  }

  // @TODO: In progress
  register(email: string, password: string): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/create`, {email, password})
  }
}


