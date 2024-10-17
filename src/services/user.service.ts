import {Injectable} from '@angular/core';
import {UserModel} from '../app/models/user.model';
import bcrypt from 'bcrypt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private retrieveAllUsers(): UserModel[] {
    let json = localStorage.getItem('users');
    if (json == null) {
      localStorage.setItem('users', JSON.stringify([]));
      json = localStorage.getItem('users');
    }

    return JSON.parse(json!);
  }

  public createUser(model: UserModel) {
    model.password = bcrypt.hashSync(model.password, 12);

    const arr = this.retrieveAllUsers();
    arr.push(model);
    localStorage.setItem('users', JSON.stringify(arr[]));
  }
  
}
