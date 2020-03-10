import { Component, OnInit, ChangeDetectorRef, NgZone, OnDestroy } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import {
  GoogleSignInSuccess,
  GoogleSignInFailure
} from "angular-google-signin";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  myClientId =
    "165534313499-qc1cfp3uckkb5p7qimrf3fcfr1pos9pj.apps.googleusercontent.com";
  spinner$: Observable<boolean>;

  loginUser = {};
  signin = true;

  
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private ngZone: NgZone
  ) {}
  async ngOnInit() {
    this.spinner$ = this._auth.getSpinner();
    await this._auth.delay(100);
    if (localStorage.getItem("token") === null) {
      this._auth.spinner$.next(false);
    }
  }
  authenticate() {
  }
  async onGoogleSignInSuccess(e: GoogleSignInSuccess) {
    const id = e.googleUser.getAuthResponse().id_token;
    const name = e.googleUser.getBasicProfile().getName();
    localStorage.setItem("token", id);
    await this._auth.login();
    this.ngZone.run(() => this._router.navigate(["/app-homepage"]));
    console.log("connected");
  }
  onFailure(event: GoogleSignInFailure) {
    console.log(event);
  }
}
