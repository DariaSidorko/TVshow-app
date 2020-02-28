import { Injectable } from '@angular/core';
import { IShowService } from './ishow-service';
import { ICurrentShow, ICurrentShowCast, ICurrentShowSeasons, IFrontPage } from './icurrent-show';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowFakeService implements IShowService{
   
  constructor() { }

  public getCurrentShow(search: string) : Observable<ICurrentShow[]>{

    let array = new Array();
    for (let i = 0; i < 2; i++){
      array.push( new Object({
        id: 139,
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


  getCurrentShowCast(search: string): Observable<ICurrentShowCast[]>{
    let array = new Array()
    for (let i = 0; i < 7; i++){
      array.push( new Object({
        castName: "Mackenzie Lintz",
        castURL: "http://www.tvmaze.com/people/7/mackenzie-lintz",
        castImage: "http://static.tvmaze.com/uploads/images/medium_portrait/3/7816.jpg",
        characterName: "Norrie Calvert-Hill",
        characterURL: "http://www.tvmaze.com/characters/7/under-the-dome-norrie-calvert-hill",
        characterImage: "http://static.tvmaze.com/uploads/images/medium_portrait/0/793.jpg",
      }))
    }
    return of(array);
  }


  public getCurrentShowSeasons(id: string): Observable<ICurrentShowSeasons[]>{
    let array = new Array();
    for (let i = 0; i < 2; i++){
      array.push( new Object({
        number: 1,
        name: "Girls",
        episodeOrder: 15,
        premiereDate: "2013",
        endDate: "2015",
    }))
  }
    return of(array);
  }


public   getFrontPageShows(): Observable<IFrontPage[]>{
  let array = new Array();
  for (let i = 0; i < 5; i++){
    array.push( new Object({
      season: 14,
      runtime: 60,
      name: "Rachel Ray",
      genres: "",
      type: "Talk Show",
      airtime: "11:00",
      airstamp: "2020-02-28T16:00:00+00:00",
      officialSite: "http://www.rachaelrayshow.com/",
      rating: null,
      imdb: "tt0827947",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/32/80226.jpg",   
      summary: "Rachael Ray, also known as Rachael and The Rachael Ray Show, is an American talk show starring Rachael Ray that debuted in syndication in the United States and Canada on September 18, 2006 and also airs in other countries."
    }))
  }
  return of (array); 

  }


}
