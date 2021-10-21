import { Component, OnInit, Input } from '@angular/core';

import { KatoraService } from '../../services/katora.service';




@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {



  @Input() data: any;

  ngOnInit() {
  }

  constructor(private katoraService : KatoraService){ }

  onAddCart(product: any){

    this.katoraService.addProductToCart(product);  
    
  }

  onAddWishlist(product: any){
    
    this.katoraService.addProductToWishlist(product);

  }
}
