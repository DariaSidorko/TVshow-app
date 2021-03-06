import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShowData, IFrontPageData, ICurrentShowCastData, ICurrentShowSeasonsData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { ICurrentShow, ICurrentShowCast, ICurrentShowSeasons} from './icurrent-show';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IShowService } from './ishow-service';
import { IFrontPage } from './icurrent-show';


@Injectable({
  providedIn: 'root'
})
export class ShowService implements IShowService{
  constructor (private httpClient: HttpClient) { }

// Search API call

  getCurrentShow(search: string): Observable<ICurrentShow[]>{
    
    return this.httpClient.get<ICurrentShowData[]>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${search}&embed=cast`
      ).pipe(map(data => this.transformToICurrentShow(data)))
    }

  private transformToICurrentShow(data: ICurrentShowData[]) : ICurrentShow[]{
    
    let array = new Array();
    for (let i = 0; i < data.length; i++){

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
  return array;
}

//  Show Cast API call

  getCurrentShowCast(id: string): Observable<ICurrentShowCast[]>{
    return this.httpClient.get<ICurrentShowCastData[]>(
     `${environment.baseUrl}api.tvmaze.com/shows/${id}/cast`
     ).pipe(map(data => this.transformToICurrentShowCast(data)))
   } 

  private transformToICurrentShowCast(data: ICurrentShowCastData[]) : ICurrentShowCast[] {
    //console.log(data);

    let array = new Array()
    for (let i = 0; i < data.length; i++){
      array.push( new Object({
        castName: data[i].person.name ? data[i].person.name : "",
        castURL: data[i].person.url ? data[i].person.url : "",
        castImage: data[i].person.image ? data[i].person.image.medium : "../../assets/image-coming-soon.jpg",
        characterName: data[i].character.name ? data[i].character.name : "",
        characterURL: data[i].character.url ? data[i].character.url : "",
        characterImage: data[i].character.image ? data[i].character.image.medium : "",
      }))
    }
    return array;
  }

  getCurrentShowSeasons(id: string): Observable<ICurrentShowSeasons[]>{
    console.log("Episodes Are in!")
    return this.httpClient.get<ICurrentShowSeasonsData[]>(
     `${environment.baseUrl}api.tvmaze.com/shows/${id}/seasons`
     ).pipe(map(data => this.transformToICurrentShowSeasons(data)))
   } 

  private transformToICurrentShowSeasons(data: ICurrentShowSeasonsData[]) : ICurrentShowSeasons[] {
    let array = new Array()
    for (let i = 0; i < data.length; i++){
      array.push( new Object({
        number: data[i].number,
        name: data[i].name,
        episodeOrder: (!data[i].episodeOrder) ? "-" : data[i].episodeOrder,
        premiereDate: data[i].premiereDate.substring(0, 4),
        endDate: data[i].endDate.substring(0, 4)
      }))
    }
    return array;
  }

// Schedule API call to populate the front page

  getFrontPageShows(): Observable<IFrontPage[]>{
    
    return this.httpClient.get<IFrontPageData[]>(
      `${environment.baseUrl}api.tvmaze.com/schedule`
      ).pipe(map(data => this.transformToIFrontPage(data)))

    }

  private transformToIFrontPage(data: IFrontPageData[]) : IFrontPage[] {  
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

    // Sorting by the rating

    array.sort((a, b) => a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0);

    // Checking for show repetition (in case same show appears several time on TV through the day)
    let temp;
    for (let i = 0; i < array.length -1; i++){
      temp = array[i];
      for (let j = i + 1; j < array.length; j++){
        if (array[i].name == array[j].name){
          array[i].airtime = array[i].airtime  + "  and  " +  array[j].airtime; 
          array.splice(j, 1);
        }
      }
    }

    return array; 
    
  }
 
}