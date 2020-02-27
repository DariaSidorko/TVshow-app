import { Component, OnInit, Input } from '@angular/core';
import { ICurrentShow, ICurrentShowCast } from '../icurrent-show';
import { ShowService } from '../show.service';



@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  @Input() currents: ICurrentShow[]
  cast: ICurrentShowCast[]
  details: ICurrentShow;

  constructor(private showService: ShowService) {}
  

  ngOnInit() {}

  fireEvent(showDetails){
    //console.log(showDetails.id);
    this.details = showDetails;
    this.showService.getCurrentShowCast(showDetails.name).subscribe(data => this.cast = data);
    // for SURRY: you can pass this.showDetails.id in this **getCurrentShowCast** call and change URL and mapping accordingly.
  //this.currentShowEvent.emit(showDetailst.name);
  }

  show = false;

  toggleShow(){
    this.show == false ? this.show = true : undefined;
  }
  toggleHide(){
    this.show == true ? this.show = false : undefined;
  }
    
}


