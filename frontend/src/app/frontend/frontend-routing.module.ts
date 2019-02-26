import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {KamersComponent} from "./components/kamers/kamers.component";
import {ActiviteitenComponent} from "./components/activiteiten/activiteiten.component";
import {RestaurantComponent} from "./components/restaurant/restaurant.component";
import {FrontEndComponent} from "./frontend.component";
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', component: FrontEndComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'kamers', component: KamersComponent},
      {path: 'activiteiten', component: ActiviteitenComponent},
      { path: 'restaurant', component: RestaurantComponent},
      { path: 'login', component: LoginComponent}
        ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontEndAppRoutingModule {
}
