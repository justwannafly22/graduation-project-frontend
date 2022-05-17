import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PersistanceService } from "src/app/shared/services/persistanse.service";
import { TranslationService } from "src/app/shared/services/translate.service";


// @UntilDestroy()
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeaderComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  isAnonymous$!: Observable<boolean>;
  public part:string = this.persistanseService.get('part');
  // currentUser$!: Observable<
  //   CurrentUserInterface | VerifieldUserInterface | null
  // >;
  userName!: any;

  constructor(
    // private themeService: ThemeService,
    private translationService: TranslationService,
    private persistanseService: PersistanceService
    // private store: Store
  ) {}

  ngOnInit(): void {
    // this.isLoggedIn$ = this.store.pipe(
    //   untilDestroyed(this),
    //   select(isLoggedInSelector)
    // );
    // this.isAnonymous$ = this.store.pipe(
    //   untilDestroyed(this),
    //   select(isAnonymousSelector)
    // );
    // this.currentUser$ = this.store.pipe(
    //   untilDestroyed(this),
    //   select(currentUserSelector)
    // );
  }

  public switchTheme(): void {
    // this.themeService.toggleTheme();
  }
  public languageSwitcher() {
    this.translationService.setLang();
  }
}
function UntilDestroy() {
  throw new Error("Function not implemented.");
}

