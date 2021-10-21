import { Component, OnInit, Input } from '@angular/core';
import { KatoraService } from 'src/app/services/katora.service';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss']
})
export class PopularProductComponent implements OnInit {

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
