import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import '../styles/app.css';

const routes: Routes = [];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  exports: [RouterModule],
  bootstrap: [LoginComponent]
})
export class AppModule { }
