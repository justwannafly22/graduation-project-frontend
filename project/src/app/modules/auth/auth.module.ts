import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import { AuthBasicComponent } from './components/auth-basic/auth-basic.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InputFieldsModule } from 'src/app/shared/components/inputs/input-fields.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthLoginComponent, AuthRegisterComponent, AuthBasicComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AuthRoutingModule,
    TranslateModule,
    InputFieldsModule,
    //MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
