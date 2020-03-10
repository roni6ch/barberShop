import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { ViewportScroller } from "@angular/common";

window.onscroll = function (e) {  
  let element = document.querySelector('.navWrapper');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})

export class NavComponent implements OnInit {
  loggedIn$: Observable<boolean>;
  constructor(private _auth: AuthService, private vps: ViewportScroller) {}
  ngOnInit() {
    this.loggedIn$ = this._auth.isLoggedIn();
  }

  logout() {
    this._auth.logout();
  }
  scroll(id) {
    this.vps.scrollToAnchor(id);
  }
}
