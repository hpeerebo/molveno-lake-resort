import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// BackEnd imports
import { BackEndHomeComponent } from './components/home/home.component';
import { BackEndActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { BackEndKamersComponent } from './components/kamers/kamers.component';
import { BackEndLoginComponent } from './components/login/login.component';
import { BackEndRestaurantComponent } from './components/restaurant/restaurant.component';
import {BackEndComponent} from "./backend.component";
import {BackEndRoutingModule} from "./backend-routing.module";

@NgModule({
  declarations: [
    BackEndComponent,
    BackEndHomeComponent,
    BackEndActiviteitenComponent,
    BackEndKamersComponent,
    BackEndLoginComponent,
    BackEndRestaurantComponent],
  imports: [
    CommonModule,
    BackEndRoutingModule
  ]
})
export class BackendModule { }
