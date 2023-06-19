import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginReactiveFormComponent } from './components/login-reactive-form/login-reactive-form.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'signup', component: SignupFormComponent},
  {path: 'login', component: LoginReactiveFormComponent},
  {path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
