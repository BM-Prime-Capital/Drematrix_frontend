import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthenticationService} from "../authentication.service";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate{

  constructor(private authService : AuthenticationService,
  private router: Router){}
  canActivate(route : ActivatedRouteSnapshot,
              state: RouterStateSnapshot) :  MaybeAsync<GuardResult>{
    if(this.authService.getAuthStatus()){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }
  }
}
