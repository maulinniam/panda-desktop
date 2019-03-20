import { Component, OnInit } from '@angular/core';
import { shell } from 'electron';

@Component({
  selector: 'app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public url = 'https://m.me/puskomedia.id';

// tslint:disable-next-line: no-empty
  constructor() { }

// tslint:disable-next-line: no-empty
  public ngOnInit() {
  }

  public openURL(url) {
    shell.openExternal(url);
  }

}
