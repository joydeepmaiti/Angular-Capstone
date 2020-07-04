import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsRoutingModule } from './products/products-routing.module';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    AboutComponent,
    LoginComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpClientTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
