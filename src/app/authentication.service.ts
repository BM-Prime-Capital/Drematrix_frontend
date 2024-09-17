import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './interfaces/login';
import { RegisterResponse } from './interfaces/register';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://dream-mast.onrender.com/api';

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => {
        localStorage.setItem("token", response.token);
        return response;
      })
    )

  }

  register(email: string, password: string): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/create`, {email, password})
  }
}
