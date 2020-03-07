import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  GoogleSignInSuccess,
  GoogleSignInFailure
} from "angular-google-signin";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myClientId: string =
    "165534313499-qc1cfp3uckkb5p7qimrf3fcfr1pos9pj.apps.googleusercontent.com";

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() { console.log("LoginComponent");}
  
  onGoogleSignInSuccess(e: GoogleSignInSuccess) {
    let id = e.googleUser.getAuthResponse().id_token;
    let name = e.googleUser.getBasicProfile().getName();
    localStorage.setItem('token',id);
    console.log("connected");
    this._router.navigate(["/app-homepage"]);
  }
  onFailure(event: GoogleSignInFailure) {
    console.log(event);
  }

}
