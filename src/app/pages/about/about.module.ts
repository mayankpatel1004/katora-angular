import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from 'src/app/components/components.module';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AboutOneComponent } from './about-one/about-one.component';
import { AboutTwoComponent } from './about-two/about-two.component';
import { ContactOneComponent } from './contact-one/contact-one.component';
import { ContactTwoComponent } from './contact-two/contact-two.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [AboutOneComponent, AboutTwoComponent, ContactOneComponent, ContactTwoComponent, PrivacyPolicyComponent, TermAndConditionComponent, RefundPolicyComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule,
    ComponentsModule,

    // Specify your library as an import
    SlickCarouselModule,

    HeaderModule,
    FooterModule
  ],
  exports: [AboutOneComponent, AboutTwoComponent, ContactOneComponent, ContactTwoComponent, PrivacyPolicyComponent, TermAndConditionComponent, RefundPolicyComponent]
})
export class AboutModule { }
