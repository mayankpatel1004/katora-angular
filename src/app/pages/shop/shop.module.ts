import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';


import { ComponentsModule } from '../../components/components.module';
import { HeaderModule } from '../../layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';


import { ShopOneComponent } from './shop-one/shop-one.component';
import { ShopTwoComponent } from './shop-two/shop-two.component';
import { ShopThreeComponent } from './shop-three/shop-three.component';
import { ShopFourComponent } from './shop-four/shop-four.component';
import { ShopFiveComponent } from './shop-five/shop-five.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [ShopOneComponent, ShopTwoComponent, ShopThreeComponent, ShopFourComponent, ShopFiveComponent],
  imports: [

    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule,
    
    ComponentsModule,
    
    HeaderModule,
    FooterModule,
    SidebarModule
  ],
  exports: [ShopOneComponent, ShopTwoComponent, ShopThreeComponent, ShopFourComponent, ShopFiveComponent]
})
export class ShopModule { }
