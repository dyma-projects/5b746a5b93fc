import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/model/user/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.userService.user.subscribe(
      users => this.users=users
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //this.userService.user.unsubscrie()
  }

}
