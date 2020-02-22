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
    return this.httpClient.get<ICurrentShowCastData[]>(
     `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${search}&embed=cast`
     ).pipe(map(data => this.transformToICurrentShowCast(data)))
   } 

  private transformToICurrentShowCast(data: ICurrentShowCastData[]): ICurrentShowCast[] {

    let array = new Array()
    for (let i = 0; i < data.length; i++){
      array.push( new Object({
        castName: data[i]._embedded.cast[i].person.name,
        castURL: data[i]._embedded.cast[i].person.url,
        castImage: data[i]._embedded.cast[i].person.image.medium,
        characterName: data[i]._embedded.cast[i].character.name,
        characterURL: data[i]._embedded.cast[i].character.url,
        characterImage: data[i]._embedded.cast[i].character.image.medium
      }))
    }
    return array;
  }

  getFrontPageShows(): Observable<IFrontPage>{
    return this.httpClient.get<IFrontPageData>(
      `${environment.baseUrl}api.tvmaze.com/schedule`
      ).pipe(map(data => this.transformToIFrontPage(data)))
    }

  private transformToIFrontPage(data: IFrontPageData) : IFrontPage {
    return {
      name: data[0].show.name, //show -> name
      type: data[0].show.type,
      airtime: data[0].airtime, 
      officialSite: data[0].show.officialSite,
      rating: data[0].show.rating.everage,
      networkName: data[0].show.network.name,
      imdb: data[0].show.externals.imdb,
      image: data[0].show.image.medium//medium    
    }
  }
}