import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICurrentShow, ICurrentShowCast } from '../icurrent-show';
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
  cast: ICurrentShowCast[]
  
  
  details: ICurrentShow;

  //@Output() public currentShowEvent = new EventEmitter();


  constructor(private showService: ShowService) {}
  

  ngOnInit() {}

  fireEvent(showDetails){
    //console.log(showDetails.id);
    this.details = showDetails;
    this.showService.getCurrentShowCast(showDetails.name).subscribe(data => this.cast = data);
    // for SURRY: you can pass this.showDetails.id in this **getCurrentShowCast** call and change URL and mapping accordingly.
  
  //this.currentShowEvent.emit(showDetailst.name);
  }
    
}


/*new Object ({
      name: showDetails.name,
      language: showDetails.language,
      genres: showDetails.genres, 
      status: showDetails.status,
      officialSite: showDetails.officialSite,
      runtime: showDetails.runtime,
      premiered: showDetails.substring,
      time: showDetails.time,
      days: showDetails.days,
      rating: showDetails.rating,
      network: showDetails.network,
      country: showDetails.country, 
      image: showDetails.image,
      summary: showDetails.summary,
  }) */