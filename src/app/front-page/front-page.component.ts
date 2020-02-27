import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { IFrontPage } from '../icurrent-show';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  
  news = new Array();
  reality= new Array();
  documentaries = new Array();

  details: IFrontPage;

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

      //array.sort((a, b) => a.time > b.time ? -1 : a.time < b.time ? 1 : 0);

    } );
  }

  fireEvent(showDetails){
    this.details = showDetails;
  }

  show = false;
    toggleShowNews(){this.show == false ? this.show = true : undefined}
    toggleHideNews(){this.show == true ? this.show = false : undefined}

    toggleShowReality(){this.show == false ? this.show = true : undefined}
    toggleHideReality(){this.show == true ? this.show = false : undefined}

    toggleShowDocumentary(){this.show == false ? this.show = true : undefined}
    toggleHideDocumentary(){this.show == true ? this.show = false : undefined}
}
