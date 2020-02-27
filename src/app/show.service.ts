import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShowData, IFrontPageData, ICurrentShowCastData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { ICurrentShow, ICurrentShowCast} from './icurrent-show';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IShowService } from './ishow-service';
import { IFrontPage } from './icurrent-show';
import { EventEmitter } from 'protractor';
import { TypeScriptEmitter } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ShowService implements IShowService{
  constructor (private httpClient: HttpClient) { }

  getCurrentShow(search: string): Observable<ICurrentShow[]>{
    
    return this.httpClient.get<ICurrentShowData[]>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${search}&embed=cast`
      ).pipe(map(data => this.transformToICurrentShow(data)))
    }
    //&embed=cast

  private transformToICurrentShow(data: ICurrentShowData[]) : ICurrentShow[]{
    
    //console.log(data);
    
    let array = new Array();
    for (let i = 0; i < data.length; i++){
      //console.log(i); 
      //console.log(data[i]); 

      array.push( new Object({
        id: data[i].show.id,
        name: data[i].show.name,
        language: data[i].show.language,
        genres: data[i].show.genres.join(", "), //.join(", "),
        status: data[i].show.status,
        officialSite: data[i].show.officialSite,
        runtime: data[i].show.runtime,
        premiered: data[i].show.premiered ? data[i].show.premiered.substring(0, 4): "",
        time: data[i].show.schedule ? data[i].show.schedule.time : "",
        days: data[i].show.schedule ? data[i].show.schedule.days.join(", ") : "",
        rating: data[i].show.rating ? data[i].show.rating.average : "",
        network: data[i].show.network ? data[i].show.network.name : "",
        country: data[i].show.network ? data[i].show.network.country.code : "", 
        image: data[i].show.image ? data[i].show.image.medium : "../../assets/image-coming-soon.jpg",
        summary: data[i].show.summary ? data[i].show.summary.replace(/(<([^>]+)>)/ig,"") : "",
    }))

  }
  return array 
}

  getCurrentShowCast(search: string): Observable<ICurrentShowCast[]>{
    return this.httpClient.get<ICurrentShowCastData>(
     `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${search}&embed=cast`
     ).pipe(map(data => this.transformToICurrentShowCast(data)))
   } 

  private transformToICurrentShowCast(data: ICurrentShowCastData) : ICurrentShowCast[] {
    //console.log(data);

    let array = new Array()
    for (let i = 0; i < data._embedded.cast.length; i++){
      array.push( new Object({
        castName: data._embedded.cast[i].person.name,
        castURL: data._embedded.cast[i].person.url,
        castImage: data._embedded.cast[i].person.image.medium,
        characterName: data._embedded.cast[i].character.name,
        characterURL: data._embedded.cast[i].character.url,
        characterImage: data._embedded.cast[i].character.image.medium
      }))
    }
    return array;
  }

  getFrontPageShows(): Observable<IFrontPage[]>{
    
    return this.httpClient.get<IFrontPageData[]>(
      `${environment.baseUrl}api.tvmaze.com/schedule`
      ).pipe(map(data => this.transformToIFrontPage(data)))

    }

  private transformToIFrontPage(data: IFrontPageData[]) : IFrontPage[] {  
    //console.log(data[0].show.webChannel.name);
    let array = new Array();
    
    for (let i = 0; i < data.length; i++){
      array.push( new Object({
        season: data[i].season,
        runtime: data[i].runtime,
        name: data[i].show.name, //show -> name
        genres: data[i].show.genres.join(", "),
        type: data[i].show.type,
        airtime: data[i].airtime,
        airstamp: data[i].airstamp, 
        officialSite: (data[i].show.officialSite === null) ? `https://www.imdb.com/title/${data[i].show.externals.imdb}/` : data[i].show.officialSite,
        rating: data[i].show.rating ? data[i].show.rating.average : "",
        imdb: data[i].show.externals ? data[i].show.externals.imdb : "",
        image: data[i].show.image ? data[i].show.image.medium : "../../assets/image-coming-soon.jpg",//medium    
        summary: data[i].show.summary ? data[i].show.summary.replace(/(<([^>]+)>)/ig,"") : ""
      }))
    }

    array.sort((a, b) => a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0);

    return array 
    
  }

 
}