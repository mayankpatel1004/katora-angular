import { Component, OnInit } from '@angular/core';
import { KatoraService } from 'src/app/services/katora.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(private katoraService : KatoraService) {
    localStorage.removeItem('cartProducts');
    localStorage.removeItem('orderData');
  }

  ngOnInit() {
  }

}
