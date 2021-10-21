import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from "ngx-spinner";


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
};


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ComponentsModule } from './components/components.module';
import { HeaderModule } from './layouts/header/header.module';
import { FooterModule } from './layouts/footer/footer.module';
import { SidebarModule } from './layouts/sidebar/sidebar.module';

import { HomeModule } from './pages/home/home.module';

import { ShopModule } from './pages/shop/shop.module';
import { ProductSingleModule } from './pages/product-single/product-single.module';
import { CartModule } from './pages/cart/cart.module';
import { UserAccountModule } from './pages/user-account/user-account.module';
import { BlogModule } from './pages/blog/blog.module';

import { SessionModule } from './pages/session/session.module';


import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { AboutModule } from './pages/about/about.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { ToastrModule } from 'ngx-toastr';

import { LightboxModule } from 'ngx-lightbox';
import { NgxImageZoomModule  } from 'ngx-image-zoom';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    NotfoundComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(), // ToastrModule added
    NgxImageZoomModule.forRoot(),
    NgxSpinnerModule,
    LightboxModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    HomeModule,
    
    
    ShopModule,
    ProductSingleModule,
    CartModule,
    UserAccountModule,
    BlogModule,
    
    SessionModule,
    AboutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CheckoutComponent, NotfoundComponent]
})
export class AppModule { 

  
}
