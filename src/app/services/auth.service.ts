import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  public spinner$ = new BehaviorSubject<boolean>(true);

  constructor() {}
  delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
  async login(): Promise<void> {
    await this.delay(500);
    this.spinner$.next(false);
    this.loggedIn$.next(true);
  }
  async logout(): Promise<void> {
    await this.delay(500);
    localStorage.removeItem("token")
    this.loggedIn$.next(false);
  }
  getSpinner(): Observable<boolean> {
    return this.spinner$.asObservable();
  }
}
