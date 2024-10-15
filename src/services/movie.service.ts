import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private static instance: MovieService;
  private httpClient: HttpClient;
  private apiKey = '1caed5b8';
  private apiUrl = 'http://www.omdbapi.com/';

  private constructor() {
    this.httpClient = inject(HttpClient)
  }

  public static getInstance(): MovieService {
    if (this.instance == null)
      this.instance = new MovieService();
    return this.instance;
  }

  getMovie(title: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}?t=${title}&apikey=${this.apiKey}`);
  }
}
