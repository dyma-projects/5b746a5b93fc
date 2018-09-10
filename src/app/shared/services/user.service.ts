

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public userList : User[] = [];

  public users : BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.userList);
  user = this.users.asObservable();

  public addUser(u:User){
    const user : User = new User(u.name);
    this.userList.push(user);
    this.users.next(this.userList);
  }

}
