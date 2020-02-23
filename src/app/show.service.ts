import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShowData, IFrontPageData, ICurrentShowCastData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { ICurrentShow, ICurrentShowCast} from './icurrent-show';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IShowService } from './ishow-service';
import { IFrontPage } from './icurrent-show';

@Injectable({
  providedIn: 'root'
})
export class ShowService implements IShowService{

  constructor (private httpClient: HttpClient) { }

  getCurrentShow(search: string): Observable<ICurrentShow>{
    return this.httpClient.get<ICurrentShowData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${search}&embed=cast`
      ).pipe(map(data => this.transformToICurrentShow(data)))
    }

  private transformToICurrentShow(data: ICurrentShowData) : ICurrentShow{
    return {
      name: data.name,
      language: data.language,
      genres: data.genres.join(", "),
      status: data.status,
      officialSite: data.officialSite,
      runtime: data.runtime,
      premiered: data.premiered.substring(0, 4),
      time: data.schedule.time,
      days: data.schedule.days.join(", "),
      rating: data.rating.average,
      network: data.network.name,
      country: data.network.country.code, 
      image: data.image.medium,
      summary: data.summary.replace(/(<([^>]+)>)/ig,""),
    }
  }

  getCurrentShowCast(search: string): Observable<ICurrentShowCast[]>{
    return this.httpClient.get<ICurrentShowCastData>(
     `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${search}&embed=cast`
     ).pipe(map(data => this.transformToICurrentShowCast(data)))
   } 

  private transformToICurrentShowCast(data: ICurrentShowCastData) : ICurrentShowCast[] {
    console.log(data);

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
    let array =new Array();
    for (let i = 0; i < data.length; i++){
      array.push( new Object({
        name: data[i].show.name, //show -> name
        type: data[i].show.type,
        airtime: data[i].airtime, 
        officialSite: data[i].show.officialSite,
        rating: data[i].show.rating.average,
        //webChannel: data[i].show.webChannel.name,
        imdb: data[i].show.externals.imdb,
        image: data[i].show.image.medium//medium    
      }))
    }

    array.sort((a, b) => a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0);

    return array 
    
  }
}