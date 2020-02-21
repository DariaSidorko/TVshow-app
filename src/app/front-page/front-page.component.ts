import { Component, OnInit } from '@angular/core';
import { IFrontPage } from '../ifront-page';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  frontPage: IFrontPage
  constructor() {
    this.frontPage = {
      name: 'Rachael Ray', //show -> name
      airtime: '11:00', 
      officialSite: 'http://www.rachaelrayshow.com/',
      rating: null,
      networkName: 'Syndication',
      imdb: 'tt0827947',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/32/80226.jpg' //medium
   } as IFrontPage
  
  }

   ngOnInit(): void {}
  

}
