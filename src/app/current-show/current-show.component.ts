import { Component, OnInit } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  current: ICurrentShow;
  constructor() {
    this.current = {
      name:'Girls',
      language: 'English',
      genres: 'Drama, Romance',
      officialSite: 'http://www.hbo.com/girls',
      runtime: 30,
      showTime: 'Sunday 22:00',
      raiting: 6.9,
      network: 'HBO', //network -> name
      country: 'US', 
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
      summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.',
    } as ICurrentShow
   }

  ngOnInit(): void {
  }

}
