import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { environment } from "src/app/environments/environment";
import { MaterialExampleModule } from "src/app/shared/modules/material.module";
import { MainHeaderComponent } from "./components/main-header/main-header.component";
import { MainComponent } from "./components/main/main.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { MainPageRoutingModule } from "./main-page-routing.module";

@NgModule({
  declarations: [MainComponent, SideBarComponent, MainHeaderComponent],
  providers: [],
  imports: [
    RouterModule,
    // NewsModule,
     CommonModule,
     MainPageRoutingModule,
     MatIconModule,
     MatSidenavModule,
     TranslateModule,
     MatButtonModule,
     MaterialExampleModule,
    // ProjectsModule,
     MatListModule,
    // CvModule,
  ],
  exports: [],
})
export class MainPageModule {
    constructor(private translateService: TranslateService) {
    this.translateService.use(environment.defaultLocale);
  }
}
