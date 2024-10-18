import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {GenreComponent} from './genre/genre.component';
import {SearchComponent} from './search/search.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genre', component: GenreComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];
