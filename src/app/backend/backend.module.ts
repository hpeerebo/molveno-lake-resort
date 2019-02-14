import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// BackEnd imports
import { BackEndHomeComponent } from './components/home/home.component';
import { BackEndActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { BackEndKamersComponent } from './components/kamers/kamers.component';
import { BackEndLoginComponent } from './components/login/login.component';
import { BackEndRestaurantComponent } from './components/restaurant/restaurant.component';
import {BackEndComponent} from './backend.component';
import {BackEndRoutingModule} from './backend-routing.module';
import { FormControl } from '@angular/forms';
import { KamersPipe } from '../shared/pipes/kamers.pipe';

@NgModule({
  declarations: [
    BackEndComponent,
    BackEndHomeComponent,
    BackEndActiviteitenComponent,
    BackEndKamersComponent,
    BackEndLoginComponent,
    BackEndRestaurantComponent,
    KamersPipe],
  imports: [
    CommonModule,
    BackEndRoutingModule,
    NgbModule
  ]
})
export class BackendModule { }
