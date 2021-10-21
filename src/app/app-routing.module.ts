import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOneComponent } from './pages/home/home-one/home-one.component';
import { HomeTwoComponent } from './pages/home/home-two/home-two.component';
import { HomeThreeComponent } from './pages/home/home-three/home-three.component';
import { ShopOneComponent } from './pages/shop/shop-one/shop-one.component';
import { ShopTwoComponent } from './pages/shop/shop-two/shop-two.component';
import { ShopThreeComponent } from './pages/shop/shop-three/shop-three.component';
import { ShopFourComponent } from './pages/shop/shop-four/shop-four.component';
import { ShopFiveComponent } from './pages/shop/shop-five/shop-five.component';
import { ProductOneComponent } from './pages/product-single/product-one/product-one.component';
import { ProductTwoComponent } from './pages/product-single/product-two/product-two.component';
import { ProductThreeComponent } from './pages/product-single/product-three/product-three.component';
import { ProductFourComponent } from './pages/product-single/product-four/product-four.component';
import { ProductFiveComponent } from './pages/product-single/product-five/product-five.component';


import { LogInTwoComponent } from './pages/session/log-in-two/log-in-two.component';
import { LogInOneComponent } from './pages/session/log-in-one/log-in-one.component';
import { SignUpComponent } from './pages/session/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/session/forgot-password/forgot-password.component';

import { CartOneComponent } from './pages/cart/cart-one/cart-one.component';
import { CartTwoComponent } from './pages/cart/cart-two/cart-two.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


import { ProfileComponent } from './pages/user-account/profile/profile.component';
import { WishlistComponent } from './pages/user-account/wishlist/wishlist.component';
import { CompareComponent } from './pages/user-account/compare/compare.component';
import { OrdersComponent } from './pages/user-account/orders/orders.component';
import { OrderDetailComponent } from './pages/user-account/order-detail/order-detail.component';
import { ShippingAddressComponent } from './pages/user-account/shipping-address/shipping-address.component';

import { BlogOneComponent } from './pages/blog/blog-one/blog-one.component';
import { BlogSingleComponent } from './pages/blog/blog-single/blog-single.component';
import { BlogTwoComponent } from './pages/blog/blog-two/blog-two.component';
import { ThankYouComponent } from './pages/session/thank-you/thank-you.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { AboutOneComponent } from './pages/about/about-one/about-one.component';
import { AboutTwoComponent } from './pages/about/about-two/about-two.component';
import { ContactOneComponent } from './pages/about/contact-one/contact-one.component';
import { ContactTwoComponent } from './pages/about/contact-two/contact-two.component';
import { PrivacyPolicyComponent } from './pages/about/privacy-policy/privacy-policy.component';
import { TermAndConditionComponent } from './pages/about/term-and-condition/term-and-condition.component';
import { RefundPolicyComponent } from './pages/about/refund-policy/refund-policy.component';





const routes: Routes = [
  { path: '', component: HomeOneComponent },
  { path: 'home-two', component: HomeTwoComponent },
  { path: 'home-three', component: HomeThreeComponent },

  { path: 'shop-one', component: ShopOneComponent },
  { path: 'shop-two', component: ShopTwoComponent },
  { path: 'shop-three', component: ShopThreeComponent },
  { path: 'shop-four', component:  ShopFourComponent},
  { path: 'shop-five', component:  ShopFiveComponent},

  { path: 'product-one', component: ProductOneComponent },
  { path: 'product-two', component: ProductTwoComponent },
  { path: 'product-three', component: ProductThreeComponent },
  { path: 'product-four', component:  ProductFourComponent},
  { path: 'product-five', component:  ProductFiveComponent},

  { path: 'login-one', component:  LogInOneComponent},
  { path: 'login-two', component:  LogInTwoComponent},
  { path: 'signup', component:  SignUpComponent},
  { path: 'forgot', component:  ForgotPasswordComponent},
  { path: 'cart-one', component: CartOneComponent },
  { path: 'cart-two', component: CartTwoComponent },
  { path: 'checkout', component: CheckoutComponent },

  { path: 'profile', component:  ProfileComponent},
  { path: 'wishlist', component:  WishlistComponent},
  { path: 'compare', component:  CompareComponent},
  
  { path: 'my-orders', component:  OrdersComponent},
  { path: 'order-detail', component: OrderDetailComponent},
  { path: 'shipping-addresses', component: ShippingAddressComponent},
  { path: 'blog-one', component: BlogOneComponent },
  { path: 'blog-two', component: BlogTwoComponent },
  { path: 'blog-single-post', component: BlogSingleComponent },
  { path: 'thank-you', component: ThankYouComponent },
  

  { path: 'about-one', component: AboutOneComponent },
  { path: 'about-two', component: AboutTwoComponent },
  { path: 'contact-one', component: ContactOneComponent },
  { path: 'contact-two', component: ContactTwoComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermAndConditionComponent },
  { path: 'refund', component: RefundPolicyComponent },

  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
