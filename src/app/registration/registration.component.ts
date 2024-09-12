import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {

}
