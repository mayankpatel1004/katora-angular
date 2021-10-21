import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class KatoraService {
  public cartProducts = [];
  public wishlistProducts = [];
  public count;
  public total;
  public addQuantity;
  public removeQuantity;
  public alerts;
  public closeAlert;


  constructor( private toastr: ToastrService ) {
    this.cartProducts = this.getProductFromCart();
    this.wishlistProducts = this.getProductFromWishlist();
  }

  calculateTotal(){
    let pTotal= 0; 
    this.getProductFromCart().forEach(element => {

      let p=element.products_quantity*element.products_price;

      pTotal=pTotal+p;
    });
    this.total =  pTotal;

    return pTotal;
  }
  getCartCount(){
    return this.cartProducts.length
  }
  getWishlistCount(){
    return this.wishlistProducts.length
  }

  getProductFromCart() {
    if (localStorage.getItem('cartProducts') == null) {
      return [];
    }
    else
      return JSON.parse(localStorage.getItem('cartProducts'));
  }
  addProductToCart(products: any) {
    let count = 0;
    this.cartProducts.forEach(element => {

      console.log(element);

      if (products.products_id == element.products_id) {
        count++;
      }


    });
    if (count == 0) {
      this.cartProducts.push(products);
      this.toast("Product added to cart successfully")
      this.updateCartProduct()
    }
    else {
      this.toast("Product already in cart")
    }    
  } 
  updateCartProduct(){
    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
  }
  removeProductFromCart(products: any) {
    //return  localStorage.removeItem('cartProducts');
    let count = 0;
    this.cartProducts.forEach((element) => {
      if (products.products_id == element.products_id) {
        this.cartProducts.splice(0, 1);
        count++;
      }
    });
    
    if (count != 0) {
      this.toast("Product remove from cart")
      this.updateCartProduct()
    }
  }
  

  
  getProductFromWishlist() {
    if (localStorage.getItem('wishlistProducts') == null) {
      return [];
    }
    else
      return JSON.parse(localStorage.getItem('wishlistProducts'));
  }
  addProductToWishlist(products: any){
    let count = 0;
    this.wishlistProducts.forEach(element => {
      if (products.products_id == element.products_id) {
        count++;
      }
    });
    if (count == 0) {
      this.wishlistProducts.push(products);
      this.toast("Product added to wishlist successfully")
      this.updateWishlistProduct()
    }
    else {
      this.toast("Product already in wishist")
    }
  }
  updateWishlistProduct(){
    localStorage.setItem("wishlistProducts", JSON.stringify(this.wishlistProducts));
  }
  removeProductFromWishlist(products){
    let count = 0;
    console.log(products);
    this.wishlistProducts.forEach((element) => {
      if (products.products_id == element.products_id) {
        this.wishlistProducts.splice(0, 1);
        count++;
      }
    });
    if (count != 0) {
      this.toast("Product remove from wishist")
      this.updateWishlistProduct()
    }
  }
  

  onAddQuantity(product) {
    this.cartProducts.forEach((element, index) => {
      if (product.products_id == element.products_id) {
        element.products_quantity++;
      }
    });
    this.updateCartProduct()

    this.wishlistProducts.forEach((element, index) => {
      if (product.products_id == element.products_id) {
        element.products_quantity++;
      }
    });
    
    this.updateWishlistProduct()
  }
  onRemoveQuantity(product) {
    this.cartProducts.forEach((element, index) => {
      if (product.products_id == element.products_id) {
        element.products_quantity--;
      }
    });
    this.updateCartProduct()

    this.wishlistProducts.forEach((element, index) => {
      if (product.products_id == element.products_id) {
        element.products_quantity--;
      }
    });
    
    this.updateWishlistProduct()
  }

  toast(msg){
    this.toastr.success(msg);
  }
}
