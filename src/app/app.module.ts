import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { ActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { ContactComponent } from './components/contact/contact.component';
import { KamersComponent } from './components/kamers/kamers.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActiviteitenComponent,
    ContactComponent,
    KamersComponent,
    LoginComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
