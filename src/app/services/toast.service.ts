import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public showSuccess: boolean = false;
  public showError: boolean = false;
  public message: string = "";


  constructor() { }

  showSuccessMessage(message: string): void {
    this.message = message;
    this.showSuccess = true;
    setTimeout(() => this.showSuccess = false, 3000);
  }

  showErrorMessage(message: string): void {
    this.message = message;
    this.showError = true;
    setTimeout(() => this.showError = false, 3000);
  }
}
