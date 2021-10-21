import { Component, OnInit } from '@angular/core';
import { KatoraService } from 'src/app/services/katora.service';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.scss']
})
export class WishlistButtonComponent implements OnInit {

  public productAddedToWishlist;
  public productTotal;
  public wishlistCount;
  
  constructor(private katoraService : KatoraService) { 
    
  }

  ngOnInit() {
    this.productAddedToWishlist = this.katoraService.getProductFromWishlist();    
    //console.log(this.productAddedToCart);
  }
  ngAfterContentChecked(){
    this.productAddedToWishlist = this.katoraService.getProductFromWishlist();    
    
    this.wishlistCount = this.katoraService.getWishlistCount();
    //console.log(this.productAddedToCart);
    //console.log("ngAfterContentChecked");
  }
  

}
