import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  constructor(private _auth: AuthService,private _router: Router) {}

  ngOnInit() {
    console.log("HomepageComponent");
  }

}
