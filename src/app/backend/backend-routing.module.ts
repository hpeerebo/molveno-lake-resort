import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackEndHomeComponent} from "./components/home/home.component";
import {BackEndLoginComponent} from "./components/login/login.component";
import {BackEndKamersComponent} from "./components/kamers/kamers.component";
import {BackEndRestaurantComponent} from "./components/restaurant/restaurant.component";
import {BackEndActiviteitenComponent} from "./components/activiteiten/activiteiten.component";
import {BackEndComponent} from "./backend.component";

const routes: Routes = [
  {
    path: '', component: BackEndComponent,
    children: [
      { path: 'backend/home', component: BackEndHomeComponent},
      { path: 'backend/login', component: BackEndLoginComponent},
      { path: 'backend/kamers', component: BackEndKamersComponent},
      { path: 'backend/activiteiten', component: BackEndActiviteitenComponent},
      { path: 'backend/restaurant', component: BackEndRestaurantComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BackEndRoutingModule { }
