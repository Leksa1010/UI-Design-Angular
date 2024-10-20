import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardFooter,
  MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MovieService} from '../../services/movie.service';
import {UserService} from '../../services/user.service';
import {HomeComponent} from '../home/home.component';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatChip,
    MatChipSet
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  movieTitle!: string;
  movieData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieTitle = params['title'];
      console.log('Movie title from route:', this.movieTitle); // Debug log
      this.fetchMovieData();
    });
  }

  private fetchMovieData(): void {
    const apiUrl = `http://www.omdbapi.com/?t=${this.movieTitle}&apikey=1caed5b8`;

    this.http.get(apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching movie data', error);
        return of(null);
      })
    ).subscribe(data => {
      this.movieData = data;
      console.log('Fetched movie data:', this.movieData);
    });
  }
}
