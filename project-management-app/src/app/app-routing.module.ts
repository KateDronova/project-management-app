import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'pma', pathMatch: 'full' },
  { path: 'pma', loadChildren: () => import('./boards/boards-routing.module').then(m => m.BoardsRoutingModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
