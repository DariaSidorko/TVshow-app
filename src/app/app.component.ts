import { Component } from '@angular/core';
import { ICurrentShow } from './icurrent-show';
import { ShowService } from './show.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TVshow-app';

  currentShow: ICurrentShow[];



  constructor(private showService: ShowService){}

  doSearch(searchValue){
    //const userInput = searchValue.trim;
    this.showService.getCurrentShow(
      searchValue.length > 1 ? searchValue : undefined). 
      subscribe(data => this.currentShow = data); 
  }

}
