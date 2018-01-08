import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { TabsModule, AlertModule } from 'ngx-bootstrap';

import { provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    AuthService,
    provideAuth({
      tokenGetter: function() { return localStorage.getItem('token') }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
