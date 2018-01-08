import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if(this.auth.isAuthenticated() && this.auth.isAdmin()) {
      return true;
    }
    return this.router.navigate(['/login']);
    // the CanActivate method returns true or false
    // Write some logic to return true or false based
    // on the user's authentication state and also check
    // for a role of admin
  }
}
