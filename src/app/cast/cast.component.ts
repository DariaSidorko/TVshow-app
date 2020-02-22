import { Component, OnInit } from '@angular/core';
import { ICurrentShowCast } from '../icurrent-show';
import { IShowService } from '../ishow-service';
import { ShowService } from '../show.service';


@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  current: ICurrentShowCast[]
  
  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.showService.getCurrentShowCast('Game+of+Thrones').subscribe(data => this.current = data);
  }
}