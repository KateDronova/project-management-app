import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NgxTranslateModule } from './translate/translate.module';
import { DecipherDirective } from './decipher.directive';
import { LoginReactiveFormComponent } from './components/login-reactive-form/login-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    SignupFormComponent,
    DecipherDirective,
    LoginReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTranslateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
