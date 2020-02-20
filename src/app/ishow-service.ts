import { Observable } from 'rxjs';
import { ICurrentShow } from './icurrent-show';

export interface IShowService {
  getCurrentShow(search: string) : Observable<ICurrentShow>
}
