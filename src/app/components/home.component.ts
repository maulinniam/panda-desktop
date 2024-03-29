import { Component, OnInit, ViewContainerRef } from '@angular/core';
import 'rxjs/add/operator/first';

import { User } from '../helpers/_models/index';
import { UserService } from '../helpers/_services/index';

import 'bootstrap';

@Component({
  templateUrl: '../templates/home.component.html'
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // get users from secure api end point
    this.userService
      .getAll()
      .first()
      .subscribe(users => {
        this.users = users;
      });
  }
}
