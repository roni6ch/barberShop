import "hammerjs";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";

import { GoogleSignInComponent } from "angular-google-signin";
import { LoginComponent } from "./components/login/login.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { NavComponent } from "./components/nav/nav.component";

import {
  NavbarModule,
  TooltipModule,
  WavesModule,
  ButtonsModule,
  CardsModule
} from "angular-bootstrap-md";
import { IconsModule } from "angular-bootstrap-md";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { NgxGalleryModule } from "ngx-gallery";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { ContactComponent } from "./components/contact/contact.component";

import { LightboxModule } from "ngx-lightbox";
import { FooterComponent } from "./components/footer/footer.component";
import { MatInputModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    GoogleSignInComponent,
    NavComponent,
    GalleryComponent,
    CalendarComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    MatStepperModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    CardsModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    MatTooltipModule,
    MatSnackBarModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
