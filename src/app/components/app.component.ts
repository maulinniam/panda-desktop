/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import 'rxjs/add/operator/take';
import { shell } from 'electron';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: '../templates/app.component.html'
})
export class AppComponent implements OnInit {

// tslint:disable-next-line: no-empty
  public ngOnInit() { }

  public openURL(url) {
    shell.openExternal(url);
  }

}
