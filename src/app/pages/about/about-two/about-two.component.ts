import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-two',
  templateUrl: './about-two.component.html',
  styleUrls: ['./about-two.component.scss']
})
export class AboutTwoComponent implements OnInit {

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
