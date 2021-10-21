import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from 'src/app/components/components.module';
import { FooterOneComponent } from './footer-one/footer-one.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { FooterThreeComponent } from './footer-three/footer-three.component';





@NgModule({
  declarations: [FooterOneComponent, FooterMobileComponent, FooterTwoComponent, FooterThreeComponent],
  imports: [
    
    CommonModule,
    AppRoutingModule,
    TranslateModule,
    ComponentsModule
  ],
  exports: [FooterOneComponent, FooterMobileComponent, FooterTwoComponent, FooterThreeComponent]
})
export class FooterModule { }
