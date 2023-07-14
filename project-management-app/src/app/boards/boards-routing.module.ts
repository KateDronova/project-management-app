import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { LoginReactiveFormComponent } from './pages/login-reactive-form/login-reactive-form.component';
import { UserComponent } from './pages/user-page/user.component';
import { BoardRouteComponent } from './pages/board-page/board-route.component';
import { authGuardFunction } from '../guards/auth.guard';
import { matchingGuardFunction } from '../guards/matching.guard';
import { dataResolver } from '../resolvers/data.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginReactiveFormComponent },
  { path: 'main/:id', component: UserComponent,
  canActivate: [authGuardFunction], canMatch: [matchingGuardFunction],
  resolve: { user: dataResolver }, data: {  },
  children: [
    { path: 'board/:id', component: BoardRouteComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
