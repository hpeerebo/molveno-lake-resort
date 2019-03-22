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
import { AuthGuard } from './guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from './interceptors/jwt-token-interceptor.service';

const routes: Routes = [
  {
    path: '', component: FrontEndComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'kamers', component: KamersComponent, canActivate: [AuthGuard] },
      { path: 'activiteiten', component: ActiviteitenComponent, canActivate: [AuthGuard] },
      { path: 'restaurant', component: RestaurantComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'featurette', component: FeaturetteComponent },
      { path: 'rounded-circle', component: RoundedCircleComponent },
      { path: 'kamerreserveringsservice', component: KamerreserveringenService, canActivate: [AuthGuard]},
      { path: 'gast-kamerreservering', component: GastKamerReserveringComponent, canActivate: [AuthGuard]},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
		{
		  provide: HTTP_INTERCEPTORS,
		  useClass: JwtTokenInterceptor,
		  multi: true
		}
	  ],
})
export class FrontEndAppRoutingModule {
}
