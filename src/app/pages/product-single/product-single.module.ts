import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';


import { ComponentsModule } from '../../components/components.module';
import { HeaderModule } from '../../layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';


import { ProductOneComponent } from './product-one/product-one.component';
import { ProductTwoComponent } from './product-two/product-two.component';
import { ProductThreeComponent } from './product-three/product-three.component';
import { ProductFourComponent } from './product-four/product-four.component';
import { ProductFiveComponent } from './product-five/product-five.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxImageZoomModule  } from 'ngx-image-zoom';
import { LightboxModule } from 'ngx-lightbox';




@NgModule({
  declarations: [ProductOneComponent, ProductTwoComponent, ProductThreeComponent, ProductFourComponent, ProductFiveComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxImageZoomModule.forRoot(),
    LightboxModule,
    AppRoutingModule,
    TranslateModule,
    ComponentsModule,

    // Specify your library as an import
    SlickCarouselModule,
    
    HeaderModule,
    FooterModule

  ],
  exports: [ProductOneComponent, ProductTwoComponent, ProductThreeComponent, ProductFourComponent, ProductFiveComponent]
})
export class ProductSingleModule { }
