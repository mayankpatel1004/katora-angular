import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { LangaugeDropdownComponent } from './langauge-dropdown/langauge-dropdown.component';
import { CurrencyDropdownComponent } from './currency-dropdown/currency-dropdown.component';
import { AlertHeaderComponent } from './alert-header/alert-header.component';
import { AccountDropdownComponent } from './account-dropdown/account-dropdown.component';
import { CartDropdownComponent } from './cart-dropdown/cart-dropdown.component';
import { BlogCardGridComponent } from './blog-card-grid/blog-card-grid.component';
import { FullScreenBannerComponent } from './full-screen-banner/full-screen-banner.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { WishlistButtonComponent } from './wishlist-button/wishlist-button.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { AcceptCookieComponent } from './accept-cookie/accept-cookie.component';
import { NewsletterModalComponent } from './newsletter-modal/newsletter-modal.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [ LogoComponent, MenuComponent, ProductCardComponent, LangaugeDropdownComponent, CurrencyDropdownComponent, AlertHeaderComponent, AccountDropdownComponent, CartDropdownComponent, BlogCardGridComponent, FullScreenBannerComponent, PopularProductComponent, WishlistButtonComponent, ProductModalComponent, AcceptCookieComponent, NewsletterModalComponent, BackToTopComponent, SwitcherComponent, PageLoaderComponent ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule,
    PipesModule,
    // Specify your library as an import
    SlickCarouselModule,
  ],
  exports: [ LogoComponent, MenuComponent, ProductCardComponent, LangaugeDropdownComponent, CurrencyDropdownComponent, AlertHeaderComponent, AccountDropdownComponent, CartDropdownComponent, BlogCardGridComponent, FullScreenBannerComponent, PopularProductComponent, WishlistButtonComponent, ProductModalComponent, AcceptCookieComponent, NewsletterModalComponent, BackToTopComponent, SwitcherComponent, PageLoaderComponent ]
})
export class ComponentsModule { }
