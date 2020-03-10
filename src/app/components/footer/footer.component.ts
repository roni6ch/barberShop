import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  loggedIn$: Observable<boolean>;
  constructor(private _auth: AuthService) {}

  ngOnInit() {
    this.loggedIn$ = this._auth.isLoggedIn();
  }

}
