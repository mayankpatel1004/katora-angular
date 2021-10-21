import { Component, OnInit } from '@angular/core';
import { KatoraService } from 'src/app/services/katora.service';

@Component({
  selector: 'app-cart-two',
  templateUrl: './cart-two.component.html',
  styleUrls: ['./cart-two.component.scss']
})
export class CartTwoComponent implements OnInit {

  public productAddedToCart;
  public productTotal;

  constructor(private katoraService : KatoraService ){  }
 
  
  ngOnInit() {
    this.productAddedToCart = this.katoraService.getProductFromCart();    
  }
  ngAfterContentChecked(){
    this.productAddedToCart = this.katoraService.getProductFromCart();    
    this.productTotal =  this.katoraService.calculateTotal().toFixed(2);
  }
  
  addQuantity(product: any){
    this.katoraService.onAddQuantity(product);

  }
  removeQuantity(product: any){
    
    this.katoraService.onRemoveQuantity(product);
     
  }

  

  removeProduct(product: any){
    this.katoraService.removeProductFromCart(product);
  }

}
