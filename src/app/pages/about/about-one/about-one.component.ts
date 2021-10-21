import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-one',
  templateUrl: './about-one.component.html',
  styleUrls: ['./about-one.component.scss']
})
export class AboutOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideTeamConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": false,

    responsive: [
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  slickInit(e) {
    console.log('slick initialized');
  }
}
