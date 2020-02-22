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
}
