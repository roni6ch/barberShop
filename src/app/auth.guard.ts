import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}
  async canActivate() {
    const p =  this._auth.isLoggedIn().pipe(first()).toPromise();
    const allowed = await p;
    console.log('auth : ' + allowed);
    if (allowed) {
      return true;
    } else {
      this._router.navigate(["/app-login"]);
      return false;
    }
  }
}
