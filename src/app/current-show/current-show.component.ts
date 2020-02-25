import { Component, OnInit, Input } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { IShowService } from '../ishow-service';
import { ShowService } from '../show.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  @Input() currents: ICurrentShow[]
  


  current = new FormControl();


  constructor(private showService: ShowService) {}
  

  ngOnInit() {}


passCurrent(current){
 console.log(current.name);
}

}