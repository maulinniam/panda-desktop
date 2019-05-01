import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ToastModule } from 'ng2-toastr';
import { Router, RouterModule } from '@angular/router';

// used to create fake backend
import { fakeBackendProvider } from './helpers/_helpers/index';

import { AppComponent } from './components/app.component';

import { AuthGuard } from './helpers/ _guards/index';
import { JwtInterceptor } from './helpers/_helpers/index';
import { AuthenticationService, UserService } from './helpers/_services/index';
import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { SuratktpComponent } from './components/suratktp.component';

import '../styles/styles.scss';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'suratktp', component: SuratktpComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SuratktpComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },

    // providers used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
