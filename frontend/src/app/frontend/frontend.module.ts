import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';

// FrontEnd imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { ContactComponent } from './components/contact/contact.component';
import { KamersComponent } from './components/kamers/kamers.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { FrontEndAppRoutingModule } from './frontend-routing.module';
import { FrontEndComponent } from './frontend.component';
import { ApplicationPipesModule } from '../shared/application-pipes/application-pipes.module';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { FeaturetteComponent } from './shared/components/featurette/featurette.component';
import { RoundedCircleComponent } from './shared/components/rounded-circle/rounded-circle.component';
import { GastKamerReserveringComponent } from './shared/components/gast-kamerreservering/gast-kamerreservering.component';
import { ReservationButtonComponent } from './shared/components/reservation-button/reservation-button.component'

@NgModule({
  declarations: [
    FrontEndComponent,
    HomeComponent,
    ActiviteitenComponent,
    ContactComponent,
    KamersComponent,
    LoginComponent,
    RestaurantComponent,
    CarouselComponent,
    FeaturetteComponent,
    RoundedCircleComponent,
    GastKamerReserveringComponent,
    ReservationButtonComponent,
  ],
  imports: [CommonModule, FrontEndAppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule, ApplicationPipesModule],
  entryComponents: [GastKamerReserveringComponent, LoginComponent],
  providers: [DatePipe],
})
export class FrontendModule {}
