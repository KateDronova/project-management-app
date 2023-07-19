import { Component, OnInit } from '@angular/core';
// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, defaultUrlMatcher } from '@angular/router';
import { UrlSegment, UrlSegmentGroup } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Project Management app';
  siteLanguage = 'English';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Russian' },
    { code: 'es', label: 'Spainish' },
  ];
  pageFor: string = 'undefinedUser'
  public href: string = window.location.href;

  // constructor(private translate: TranslateService, private cdr: ChangeDetectorRef) {}
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    if (this.urlMatcher(this.href)) {
      this.pageFor = 'definedUser';
      console.log('definedUser!');
    } else {
      this.pageFor = 'undefinedUser';
      console.log('undefinedUser!');
    }
  }
  urlMatcher(url: string) {
    // this.cdr.markForCheck();
    return url.includes('main') ? ({consumed: url}) : null;
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
