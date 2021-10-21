import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';


import { ComponentsModule } from '../../components/components.module';
import { HeaderModule } from '../../layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';


import { CartOneComponent } from './cart-one/cart-one.component';
import { CartTwoComponent } from './cart-two/cart-two.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [CartOneComponent, CartTwoComponent],
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
  exports: [CartOneComponent, CartTwoComponent]
})
export class CartModule { }
