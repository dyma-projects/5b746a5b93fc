import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/model/user/user.model';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor( 
    private userService: UserService
  ) { }

  private user  =new User(null);
  ngOnInit() {
  }

  addUser() {
    
    const username = this.el.nativeElement.value;
    this.user.name = this.el.nativeElement.value;
    

    if (this.user) 
    {
      this.userService.addUser(this.user);
      this.el.nativeElement.value='';

    }
  }

}
