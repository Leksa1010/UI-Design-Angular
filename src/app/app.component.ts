import {Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../services/user.service';
import {NgIf} from '@angular/common';
import {MatOption, MatSelect} from '@angular/material/select';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatIcon,
    RouterLink,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatSelect,
    MatOption
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UI-Design';
  public userService: UserService = UserService.getInstance();
  movieTitle: string = '';

  constructor(private router: Router) {}

  doSearch(): void {
    const formattedTitle = this.formatTitle(this.movieTitle);
    if (formattedTitle) {
      this.router.navigate(['/search', formattedTitle]);
    }
  }

  private formatTitle(title: string): string {
    return title.trim().replace(/\s+/g, '-').toLowerCase();
  }
}
