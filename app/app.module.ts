import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing,
         appRoutingProviders }  from './app.routing';


import { AppComponent }  from './app.component';
import { RegisterUserComponent }  from './register-user/register-user.component';
import { BecomeHostComponent }  from './become-host/become-host.component';
import { HomePageComponent }  from './homepage/homepage.component';
import { PageNotFoundComponent }  from './pagenotfound.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    RegisterUserComponent,
    BecomeHostComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
