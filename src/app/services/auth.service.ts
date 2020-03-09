import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  public spinner$ = new BehaviorSubject<boolean>(true);

  constructor(private _router: Router) {}
  delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
  async login(): Promise<void> {
    await this.delay(100);
    this.spinner$.next(false);
    this.loggedIn$.next(true);
  }
  async logout(): Promise<void> {
    localStorage.removeItem("token");
    await this.delay(100);
    const auth2 = gapi.auth2.getAuthInstance();
    await auth2.signOut();
    this.loggedIn$.next(false);
    this._router.navigate(["/app-login"]);
    console.log("signOut");
  }
  getSpinner(): Observable<boolean> {
    return this.spinner$.asObservable();
  }
}
