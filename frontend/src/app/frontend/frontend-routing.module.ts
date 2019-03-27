import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { KamersComponent } from "./components/kamers/kamers.component";
import { ActiviteitenComponent } from "./components/activiteiten/activiteiten.component";
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { FrontEndComponent } from "./frontend.component";
import { LoginComponent } from './components/login/login.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { FeaturetteComponent } from './shared/components/featurette/featurette.component';
import { RoundedCircleComponent } from './shared/components/rounded-circle/rounded-circle.component';
import { KamerreserveringenService } from '../services/kamerreserveringen.service';
import { GastKamerReserveringComponent } from './shared/components/gast-kamerreservering/gast-kamerreservering.component';
import { ActiviteitReserveringenComponent } from '../managementportal/components/activiteiten/activiteit-reserveringen/activiteit-reserveringen.component';
import { ActiviteitenPlanningReserverenComponent } from './components/activiteiten/activiteiten-planning-reserveren/activiteiten-planning-reserveren.component';

const routes: Routes = [
  {
    path: '', component: FrontEndComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'kamers', component: KamersComponent },
      { path: 'activiteiten', component: ActiviteitenComponent },
      { path: 'restaurant', component: RestaurantComponent },
      { path: 'login', component: LoginComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'featurette', component: FeaturetteComponent },
      { path: 'rounded-circle', component: RoundedCircleComponent },
      { path: 'kamerreserveringsservice', component: KamerreserveringenService},
      { path: 'gast-kamerreservering', component: GastKamerReserveringComponent},
      { path: 'activiteiten-planning-reserveren', component: ActiviteitenPlanningReserverenComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontEndAppRoutingModule {
}
