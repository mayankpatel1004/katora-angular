import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-langauge-dropdown',
  templateUrl: './langauge-dropdown.component.html',
  styleUrls: ['./langauge-dropdown.component.scss']
})
export class LangaugeDropdownComponent implements OnInit {

  public current_language;


  constructor(public translate: TranslateService, private renderer: Renderer2) {

    this.current_language = localStorage.getItem('lang');

    if (this.current_language == 'ar') {

      this.renderer.addClass(document.body, 'bodyrtl');

    }
    else {
      this.renderer.removeClass(document.body, 'bodyrtl');
    }
  }





  public setLanguage = (language) => {

    if (this.current_language === language) return;

    this.current_language = language;

    localStorage.setItem('lang', this.current_language);
    this.translate.use(this.current_language);
   
    if (this.current_language == 'ar') {

      this.renderer.addClass(document.body, 'bodyrtl');

    }
    else {
      this.renderer.removeClass(document.body, 'bodyrtl');
    }

  }


  ngOnInit() {
  }

}
