import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '1caed5b8';
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  getMovie(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?t=${title}&apikey=${this.apiKey}`);
  }
}
