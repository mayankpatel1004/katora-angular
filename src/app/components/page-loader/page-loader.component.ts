import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {
    
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
   }

  ngOnInit() {

    
  }

}
