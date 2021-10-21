import { Component, OnInit } from '@angular/core';
import { KatoraService } from 'src/app/services/katora.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public productAddedToWishlist;
  public productTotal;

  constructor(private katoraService : KatoraService ){  }
 
  
  ngOnInit() { 
    this.productAddedToWishlist = this.katoraService.wishlistProducts; 
  }
  ngAfterContentChecked(){
    this.productAddedToWishlist = this.katoraService.getProductFromWishlist();  
    this.productTotal =  this.katoraService.calculateTotal().toFixed(2);  
  }

  onAddCart(product: any){
    
    this.katoraService.addProductToCart(product);

  }
  
  addQuantity(product: any){
    this.katoraService.onAddQuantity(product);

  }
  removeQuantity(product: any){
    
    this.katoraService.onRemoveQuantity(product);
     
  }

  removeProduct(product: any){
    this.katoraService.removeProductFromWishlist(product);
  }

}
