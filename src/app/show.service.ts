import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShowData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { ICurrentShow } from './icurrent-show';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IShowService } from './ishow-service';

@Injectable({
  providedIn: 'root'
})
export class ShowService implements IShowService{

  constructor (private httpClient: HttpClient) { }

  getCurrentShow(search: string): Observable<ICurrentShow>{
    return this.httpClient.get<ICurrentShowData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${search}`
      ).pipe(map(data => this.transformToICurrentShow(data)))
    }
    
// &appid=${environment.appId}
private transformToICurrentShow(data: ICurrentShowData) : ICurrentShow{
  //console.log(data.show.schedule.time);
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
    summary: data.summary.replace(/(<([^>]+)>)/ig,"")
  }
}
//.substring(3,(data.summary.length) - 4)

}

