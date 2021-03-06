import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedauthenticationService } from './hardcodedauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor(private hardcodedauthenticationService: HardcodedauthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.hardcodedauthenticationService.isUserLoggedIn())
      return true;
    
      this.router.navigate(['login']);

    return false;
  }

}
