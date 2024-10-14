import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UI-Design';
}
