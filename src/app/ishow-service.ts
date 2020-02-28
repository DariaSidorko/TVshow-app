import { Observable } from 'rxjs';
import { ICurrentShow, ICurrentShowSeasons, IFrontPage, ICurrentShowCast } from './icurrent-show';

export interface IShowService {
  getCurrentShow(search: string) : Observable<ICurrentShow[]>

  getCurrentShowCast(id: string) : Observable<ICurrentShowCast[]>

  getCurrentShowSeasons(id: string) : Observable<ICurrentShowSeasons[]>

  getFrontPageShows(search: string) : Observable<IFrontPage[]>
}
