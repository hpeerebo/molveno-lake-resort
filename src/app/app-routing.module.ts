import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {KamersComponent} from "./components/kamers/kamers.component";
import {ActiviteitenComponent} from "./components/activiteiten/activiteiten.component";
import {RestaurantComponent} from "./components/restaurant/restaurant.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'kamers', component: KamersComponent},
  { path: 'activiteiten', component: ActiviteitenComponent},
  { path: 'restaurant', component: RestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
