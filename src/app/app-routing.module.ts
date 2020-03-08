import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '',    redirectTo: 'app-homepage', pathMatch: 'full'},
  { path: 'app-login', component: LoginComponent },
  { path: 'app-homepage',    component: HomepageComponent , canActivate: [AuthGuard]},
  { path: '**',    redirectTo: 'app-login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
