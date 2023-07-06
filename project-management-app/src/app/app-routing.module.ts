import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './boards/pages/welcome-page/welcome-page.component';
import { SignupFormComponent } from './boards/pages/signup-form/signup-form.component';
import { LoginReactiveFormComponent } from './boards/pages/login-reactive-form/login-reactive-form.component';
import { MainComponent } from './boards/pages/main-page/main.component';
import { BoardRouteComponent } from './boards/pages/board-page/board-route.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'signup', component: SignupFormComponent},
  {path: 'login', component: LoginReactiveFormComponent},
  {path: 'main', component: MainComponent},
  {path: 'board', component: BoardRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
