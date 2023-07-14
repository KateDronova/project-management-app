import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FooterComponent,
    NotFoundComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule
  ]
})
export class CoreModule { }
