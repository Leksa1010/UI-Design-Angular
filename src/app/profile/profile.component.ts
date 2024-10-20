import { Component } from '@angular/core';
import {JsonPipe} from "@angular/common";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
      JsonPipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  public userService: UserService;

  constructor() {
    this.userService = UserService.getInstance();
  }
}
