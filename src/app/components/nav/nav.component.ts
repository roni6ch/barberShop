import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  loggedIn$: Observable<boolean>;
  constructor(private _auth: AuthService) { }
  ngOnInit() { this.loggedIn$ = this._auth.isLoggedIn();  }

  logout() {
    this._auth.logout();
  }
}
