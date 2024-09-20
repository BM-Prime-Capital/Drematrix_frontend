import { Component } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService, private router: Router) {}

  logout(): void {
    console.log("Logout fired!")
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
