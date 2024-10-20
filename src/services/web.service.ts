import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core'
import {MovieModel} from '../app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  private static instance: WebService
  private client: HttpClient
  private baseUrl: string

  private constructor() {
    this.client = inject(HttpClient)
    this.baseUrl = 'http://www.omdbapi.com/'
  }

  public static getInstance() {
    if (WebService.instance == null)
      WebService.instance = new WebService()

    return WebService.instance
  }

  public getMovieByTitle(title: string) {
    const url = `${this.baseUrl}?i=${title}&apikey=1caed5b8`
    return this.client.get<MovieModel>(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
  }

  public getMoviesForIds(arr: number[]) {
    const url = `${this.baseUrl}?i=Blade&apikey=1caed5b8`
    return this.client.post<MovieModel[]>(url, arr, {
      headers: {
        'Accept': 'application/json'
      }
    })
  }
}
