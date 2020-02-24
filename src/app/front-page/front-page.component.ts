import { Component, OnInit } from '@angular/core';
import { IFrontPage } from '../icurrent-show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  news = new Array();
  reality= new Array();
  documentaries = new Array();

  constructor(private frontService: ShowService) {}
  

  ngOnInit() {
    this.frontService.getFrontPageShows().subscribe(data =>{
      let newsCount = 0, realityCount = 0, documentaryCount  = 0;
      /*
      let dateTime = new Date();
      let time =dateTime.toJSON();
      */
      for (let i = 0; i < data.length; i++){
        if (data[i].type === 'News') {
          this.news[newsCount] = data[i];
          newsCount++;
        }else if (data[i].type === 'Reality') {
          this.reality[realityCount] = data[i];
          realityCount++;
        } else if (data[i].type === 'Documentary') {
          this.documentaries[documentaryCount] = data[i];
          documentaryCount++;
        }
      }

    } );


    
    /* let counter = 0;
    console.log(this.front);
    for (let i = 0; i < this.front.length; i++){
      if (this.front[i].type = "Talk Show") { 
        this.talkShows.push()
        counter=+1
      }  
      (counter = 3) ? stop : undefined;
    } */
    
  }
}
