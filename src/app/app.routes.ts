import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {GenreComponent} from './genre/genre.component';
import {SearchComponent} from './search/search.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genre', component: GenreComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: ''}
];
