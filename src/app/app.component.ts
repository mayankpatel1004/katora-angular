import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'katora';

  constructor(private translate: TranslateService) {

    translate.addLangs(['en', 'ar']);

    if (localStorage.getItem('lang') === null || localStorage.getItem('lang') === undefined) {

      localStorage.setItem('lang', 'en');
      this.translate.use('en');
      translate.setDefaultLang('en');
    }else{
      translate.setDefaultLang(localStorage.getItem('lang'));
    }
    
  }
}

