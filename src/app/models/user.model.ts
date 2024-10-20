import {MovieModel} from './movie.model';

export interface UserModel {
  email: string;
  name: string;
  password: string;
  booked: BookedModel[]
}

export interface BookedModel {
  title: string;
  year: number;
  review: ReviewModel
  imdbID: number;
}

export enum ReviewModel {
  NONE = 0,
  LIKED = 1,
  DISLIKED = 2
}
