import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-pre-login',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './pre-login.component.html',
  styleUrl: './pre-login.component.scss'
})
export class PreLoginComponent {

}
