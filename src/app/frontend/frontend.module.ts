import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

// FrontEnd imports
import { HomeComponent } from './components/home/home.component';
import { ActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { ContactComponent } from './components/contact/contact.component';
import { KamersComponent } from './components/kamers/kamers.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import {FrontEndAppRoutingModule} from "./frontend-routing.module";
import {FrontEndComponent} from "./frontend.component";

@NgModule({
  declarations: [
    FrontEndComponent,
    HomeComponent,
    ActiviteitenComponent,
    ContactComponent,
    KamersComponent,
    LoginComponent,
    RestaurantComponent,],
  imports: [
    CommonModule,
    FrontEndAppRoutingModule,
    NgbModule
  ]
})
export class FrontendModule { }
