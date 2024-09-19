import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterResponse } from './interfaces/register';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://dream-mast.onrender.com/api'; // @TODO: To be changed later with environment variables to make it dynamic

  constructor(private http: HttpClient) {}


  // Just a function placeholder, you can override it and implement it your way
  // login(email: string, password: string): {}

  // @TODO: In progress
  register(email: string, password: string): Observable<HttpResponse<RegisterResponse>> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/create`, { email, password }, { observe: "response" });
  }
}
