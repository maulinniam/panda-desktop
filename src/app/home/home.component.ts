import { Component, OnInit, ViewContainerRef } from '@angular/core';
import 'rxjs/add/operator/first';
import { ToastsManager } from 'ng2-toastr';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import '../../styles/app.scss';

import 'bootstrap';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    public toastr: ToastsManager,
    private vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

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
