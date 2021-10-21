import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from '../../components/components.module';

import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { HeaderStickyComponent } from './header-sticky/header-sticky.component';





@NgModule({
  declarations: [HeaderOneComponent, HeaderMobileComponent, HeaderStickyComponent, HeaderTwoComponent, HeaderThreeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule,
    ComponentsModule
    
  ],
  exports: [
    
    HeaderOneComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderMobileComponent,
    HeaderStickyComponent
  ]
})
export class HeaderModule { }
