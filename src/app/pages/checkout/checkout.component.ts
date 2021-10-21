import { Component, OnInit } from '@angular/core';

import { KatoraService } from '../../services/katora.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public shippingFirstName = "";
  public shippingLastName = "";
  public shippingCompanyName = "";
  public shippingAddress = "";
  public shippingCountry = "";
  public shippingState = "";
  public shippingCity = "";
  public shippingPostalCode = "";
  public shippingPhone = "";


  public billingFirstName = "";
  public billingLastName = "";
  public billingCompanyName = "";
  public billingAddress = "";
  public billingCountry = "";
  public billingState = "";
  public billingCity = "";
  public billingPostalCode = "";
  public billingPhone = "";

  public shipMethodRate ="";

  public paymentMethodData = "";

  public productAddedToCart;
  public productTotal;

  constructor(private katoraService : KatoraService ){ 

    
    
  }
  
 
  
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

  addShippingData(){
    const formData = {
      shippingFirstName : this.shippingFirstName,
      shippingLastName : this.shippingLastName,
      shippingCompanyName : this.shippingCompanyName,
      shippingAddress : this.shippingAddress,
      shippingCountry : this.shippingCountry,
      shippingState : this.shippingState,
      shippingCity : this.shippingCity,

      shippingPostalCode : this.shippingPostalCode,
      shippingPhone : this.shippingPhone,

    }
    localStorage.setItem('orderData', JSON.stringify(formData));

    
  }
  addBillingData(){
    

    //console.log(this.getFormData);
    
    const formData = {
      shippingFirstName : this.shippingFirstName,
      shippingLastName : this.shippingLastName,
      shippingCompanyName : this.shippingCompanyName,
      shippingAddress : this.shippingAddress,
      shippingCountry : this.shippingCountry,
      shippingState : this.shippingState,
      shippingCity : this.shippingCity,

      shippingPostalCode : this.shippingPostalCode,
      shippingPhone : this.shippingPhone,

      billingFirstName : this.billingFirstName,
      billingLastName : this.billingLastName,
      billingCompanyName : this.billingCompanyName,
      billingAddress : this.billingAddress,
      billingCountry : this.billingCountry,
      billingState : this.billingState,
      billingCity : this.billingCity,

      billingPostalCode : this.billingPostalCode,
      billingPhone : this.billingPhone,

    }
    

    localStorage.setItem('orderData', JSON.stringify(formData));
  }

  addShipMethodData(){
    const formData = {
      shippingFirstName : this.shippingFirstName,
      shippingLastName : this.shippingLastName,
      shippingCompanyName : this.shippingCompanyName,
      shippingAddress : this.shippingAddress,
      shippingCountry : this.shippingCountry,
      shippingState : this.shippingState,
      shippingCity : this.shippingCity,

      shippingPostalCode : this.shippingPostalCode,
      shippingPhone : this.shippingPhone,

      billingFirstName : this.billingFirstName,
      billingLastName : this.billingLastName,
      billingCompanyName : this.billingCompanyName,
      billingAddress : this.billingAddress,
      billingCountry : this.billingCountry,
      billingState : this.billingState,
      billingCity : this.billingCity,

      billingPostalCode : this.billingPostalCode,
      billingPhone : this.billingPhone,

      shipMethodRate : this.shipMethodRate,
      

      products : this.productAddedToCart,
    }
    
    
    localStorage.setItem('orderData', JSON.stringify(formData));
  }
  addPaymentMethodData(){
    const formData = {
      shippingFirstName : this.shippingFirstName,
      shippingLastName : this.shippingLastName,
      shippingCompanyName : this.shippingCompanyName,
      shippingAddress : this.shippingAddress,
      shippingCountry : this.shippingCountry,
      shippingState : this.shippingState,
      shippingCity : this.shippingCity,

      shippingPostalCode : this.shippingPostalCode,
      shippingPhone : this.shippingPhone,

      billingFirstName : this.billingFirstName,
      billingLastName : this.billingLastName,
      billingCompanyName : this.billingCompanyName,
      billingAddress : this.billingAddress,
      billingCountry : this.billingCountry,
      billingState : this.billingState,
      billingCity : this.billingCity,

      billingPostalCode : this.billingPostalCode,
      billingPhone : this.billingPhone,

      shipMethodRate : this.shipMethodRate,
      

      products : this.productAddedToCart,

      paymentMethod : this.paymentMethodData,
    }
    
    
    localStorage.setItem('orderData', JSON.stringify(formData));
  }
}
