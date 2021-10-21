import { Component, OnInit } from '@angular/core';
import { KatoraService } from 'src/app/services/katora.service';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.scss']
})
export class AccountDropdownComponent implements OnInit {

  public wishlistCount;
  
  constructor(private katoraService : KatoraService) { 
    
  }

  ngOnInit() {
    
  }
  ngAfterContentChecked(){
    
    
    this.wishlistCount = this.katoraService.getWishlistCount();
    
  }

}
