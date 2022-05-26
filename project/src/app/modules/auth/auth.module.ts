import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import { AuthBasicComponent } from './components/auth-basic/auth-basic.component';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InputFieldsModule } from 'src/app/shared/components/inputs/input-fields.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthRoutingModule } from './auth-routing.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { environment } from 'src/app/environments/environment';
import { AuthServices } from './services/auth.service';
@NgModule({
  declarations: [AuthLoginComponent, AuthRegisterComponent, AuthBasicComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AuthRoutingModule,
    TranslateModule,
    InputFieldsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers:[AuthServices]
})
export class AuthModule {
  constructor(private translateService: TranslateService) {
    this.translateService.use(environment.defaultLocale);
  }
}
