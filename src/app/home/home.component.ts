import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {HttpClientModule} from '@angular/common/http';
import {JsonPipe, NgFor, NgIf} from '@angular/common';
import {MovieService} from '../../services/movie.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressBarModule,
    HttpClientModule,
    JsonPipe,
    NgIf,
    NgFor,

  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private static MOVIES = [
    '47 Ronin',
    'The Matrix',
    'Interstellar',
    'Blade',
    'The Transporter',
    'Dark Knight',
    'Joker',
    'Knives Out',
    'Jason Bourne',
    '300'
  ]
  public data: any[] = [];
  public service: MovieService;
  public user: UserService

  constructor() {
    this.service = MovieService.getInstance()
    this.user = UserService.getInstance()
  }

  ngOnInit(): void {
    for (let title of HomeComponent.MOVIES) {
      this.service.getMovie(title).subscribe(rsp => this.data.push(rsp));
    }
  }
}
