import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslationService {
  constructor(private translateService: TranslateService) {}

  lang: string | null = localStorage.getItem('language'); // | null , u need updates

  setLang() {
    if (this.lang == 'en') {
      this.lang = 'ru';
      localStorage.setItem('language', 'ru');
    } else {
      this.lang = 'en';
      localStorage.setItem('language', 'en');
    }
    this.translateService.use(this.lang);
    return this.lang;
  }
}
