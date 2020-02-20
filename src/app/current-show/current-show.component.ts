import { Component, OnInit } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { IShowService } from '../ishow-service';
import { ShowService } from '../show.service';



@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  current: ICurrentShow;
  constructor(private showService: ShowService) {}
  

  ngOnInit() {
    this.showService.getCurrentShow('Game+of+Thrones').subscribe(data => this.current = data);
  }





    
/*
SHOW EPISODE LIST
https://www.tvmaze.com/api#show-episode-list
https://www.tvmaze.com/api#show-episode-list

SHOW CAST
https://www.tvmaze.com/api#show-cast
http://api.tvmaze.com/shows/82/cast

  constructor() {
    this.current = {
      city: 'Seattle',
      country: 'US',
      date: 120938102938,
      image: '',
      temperature: 40,
      description: 'sunny'
    } as ICurrentShow
   }
*/

}
