import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';


import { ComponentsModule } from '../../components/components.module';
import { HeaderModule } from '../../layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';



import { LogInOneComponent } from './log-in-one/log-in-one.component';
import { LogInTwoComponent } from './log-in-two/log-in-two.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [ LogInOneComponent, LogInTwoComponent, SignUpComponent, ThankYouComponent, ForgotPasswordComponent,],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule,
    
    ComponentsModule,
    HeaderModule,
    FooterModule
  ],
  exports: [ LogInOneComponent, LogInTwoComponent, SignUpComponent, ThankYouComponent, ForgotPasswordComponent, ]
})
export class SessionModule { }
