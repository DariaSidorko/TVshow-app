import { Injectable } from '@angular/core';
import { IShowService } from './ishow-service';
import { ICurrentShow } from './icurrent-show';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowFakeService implements IShowService{
  
  /*
  private fakeShow: ICurrentShow[] = {
    name: 'Girls',
    language: 'English',
    genres: 'Drama',
    status: 'Ended',
    officialSite: 'http://www.hbo.com/girls',
    runtime: 30,
    premiered: '2012-04-15',
    time: '22:00',
    days: 'Sunday',
    rating: 6.9,
    network: 'HBO', //network -> name
    country: 'US', //country->code
    image: ' ',
    summary: 'This Emmy winning series is a comic look at the...', 
  }
  */
 
  constructor() { }

  public getCurrentShow(search: string) : Observable<ICurrentShow[]>{

    let array = new Array();
    for (let i = 0; i < 2; i++){
      array.push( new Object({
        name: 'Girls',
        language: 'English',
        genres: 'Drama',
        status: 'Ended',
        officialSite: 'http://www.hbo.com/girls',
        runtime: 30,
        premiered: '2012-04-15',
        time: '22:00',
        days: 'Sunday',
        rating: 6.9,
        network: 'HBO', //network -> name
        country: 'US', //country->code
        image: ' ',
        summary: 'This Emmy winning series is a comic look at the...', 
    }))
  }
    return of(array);
  }
}
