import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShowData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { ICurrentShow } from './icurrent-show';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor (private httpClient: HttpClient) { }

  getCurrentShow(show: string): Observable<ICurrentShow>{
    return this.httpClient.get<ICurrentShowData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${show}`
      ).pipe(map(data => this.transformToICurrentShow(data)))
    }
// &appid=${environment.appId}
private transformToICurrentShow(data: ICurrentShowData) : ICurrentShow{
  //console.log(data.show.schedule.time);
  return {
    name: data.name,
    language: data.language,
    genres: data.genres.join(", "),
    officialSite: data.officialSite,
    runtime: data.runtime,
    time: data.schedule.time,
    days: data.schedule.days.join(", "),
    rating: data.rating.average,
    network: data.network.name,
    country: data.network.country.code, 
    image: data.image.medium,
    summary: data.summary
  }
}
//.substring(3,(data.summary.length) - 4)


}

/* 
name:'Girls',
      name: string,
    language: string,
    genres: [string]
    runtime: number,
    officialSite: string,
    schedule: {
      time: string,
      days: [string]
    }
    raiting: {
      everage: number
    }
    network: {
      name: string,
      country: {
        code: string
      }
    } //network -> name
    image: {
      medium: string
    }
    summary: string
*/
