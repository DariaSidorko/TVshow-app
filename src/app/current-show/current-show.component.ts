import { Component, OnInit, Input } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { IShowService } from '../ishow-service';
import { ShowService } from '../show.service';



@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  @Input() current: ICurrentShow
  
  constructor(private showService: ShowService) {}
  

  ngOnInit() {}
}
