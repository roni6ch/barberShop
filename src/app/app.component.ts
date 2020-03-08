import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  spinner$: Observable<boolean>;
  constructor(private _auth: AuthService) {}
  ngOnInit() { this.spinner$ = this._auth.getSpinner();  }
}
