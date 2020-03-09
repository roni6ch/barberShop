import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {GoogleSignInComponent} from 'angular-google-signin';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './components/nav/nav.component';

import { NavbarModule,TooltipModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { IconsModule } from 'angular-bootstrap-md'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { CalendarComponent } from './components/calendar/calendar.component';



@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInComponent,
    LoginComponent,
    HomepageComponent,
    NavComponent,
    GalleryComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    NavbarModule, WavesModule, ButtonsModule,IconsModule, MatTooltipModule , MatSnackBarModule , TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
