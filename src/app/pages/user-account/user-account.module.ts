import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';


import { ComponentsModule } from '../../components/components.module';
import { HeaderModule } from '../../layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';

import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [ProfileComponent, WishlistComponent, CompareComponent, OrdersComponent, OrderDetailComponent, ShippingAddressComponent],
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
  exports: [ProfileComponent, WishlistComponent, CompareComponent, OrdersComponent, OrderDetailComponent, ShippingAddressComponent]
})
export class UserAccountModule { }
