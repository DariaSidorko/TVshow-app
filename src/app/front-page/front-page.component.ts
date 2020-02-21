import { Component, OnInit } from '@angular/core';
import { IFrontPage } from '../icurrent-show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  front: IFrontPage
  constructor(private frontService: ShowService) {}
  

  ngOnInit() {
    this.frontService.getFrontPageShows().subscribe(data => this.front = data);
  }
  /*
  constructor() {
    this.frontPage = {
      name: 'Rachael Ray', //show -> name
      type: 'Talk Show',
      airtime: '11:00', 
      officialSite: 'http://www.rachaelrayshow.com/',
      rating: null,
      networkName: 'Syndication',
      imdb: 'tt0827947',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/32/80226.jpg' //medium
   } as IFrontPage
  
  }

   ngOnInit(): void {}
*/  

}
