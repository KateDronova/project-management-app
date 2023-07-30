import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserInterface } from '../../models/user-interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false
  title = 'Project Management app'
  siteLanguage = 'English'
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Russian' },
    { code: 'es', label: 'Spainish' },
  ]
  public href: string = window.location.href
  currentUser: UserInterface = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    password: ''
  }

  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef,
    private authService: AuthService, private userService: UsersService) {}

  ngOnInit(): void {
    this.authService.booleanInfo$.subscribe((value) => {
      this.loggedIn = value;
      this.cdr.markForCheck();
    });
  }

  onLogOut(): void {
    this.authService.logOut();
    this.cdr.markForCheck();
  }

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();
    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
    }
    const currentLanguage = this.translate.currentLang;
  }
}
