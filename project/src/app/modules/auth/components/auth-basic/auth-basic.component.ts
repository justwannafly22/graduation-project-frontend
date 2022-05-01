import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translate.service';

@Component({
  selector: 'app-auth-basic',
  templateUrl: './auth-basic.component.html',
  styleUrls: ['./auth-basic.component.css'],
})
export class AuthBasicComponent implements OnInit {
  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {}
  public languageSwitcher() {
    this.translationService.setLang();
  }
}
