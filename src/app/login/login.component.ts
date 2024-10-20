import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email: string = "";
  public password: string = "";
  public userService: UserService;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.userService = UserService.getInstance()
  }

  public updateEmail(e: any) {
    this.email = e.target.value
  }

  public updatePassword(e: any) {
    this.password = e.target.value
  }

  public doLogin() {
    if (this.email == '' || this.password == '') {
      alert('Username or password is empty')
      return
    }

    try {
      this.userService.login(this.email, this.password)
      this.router.navigate(['/profile'], {relativeTo: this.route})
    } catch (e) {
      alert(e)
    }
  }
}
