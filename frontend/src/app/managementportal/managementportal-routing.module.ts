import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManagementPortalKamersFormComponent } from "./components/kamers/kamers-form/kamers-form.component";
import { ManagementPortalHomeComponent } from "./components/home/home.component";
import { ManagementPortalLoginComponent } from "./components/login/login.component";
import { ManagementPortalKamersComponent } from "./components/kamers/kamers.component";
import { ManagementPortalActiviteitenComponent } from "./components/activiteiten/activiteiten.component";
import { ManagementPortalIngredientenComponent } from "./components/restaurant/ingredienten/ingredienten.component";
import { ManagementPortalGerechtenComponent } from "./components/restaurant/gerechten/gerechten.component";
import { ManagementPortalTafelsComponent } from "./components/restaurant/tafels/tafels.component";
import { ManagementportalComponent } from "./managementportal.component";
import { ReserveringenComponent } from "./components/restaurant/reserveringen/reserveringen.component";
import { ActiviteitReserveringenComponent } from "./components/activiteiten/activiteit-reserveringen/activiteit-reserveringen.component";
import { KamerreserveringComponent } from "./components/kamers/kamerreserveringen/kamerreservering.component";
import { GerechtenDetailsComponent } from './components/restaurant/gerechten-details/gerechten-details.component';
import { ActiviteitenPlanningComponent } from "./components/activiteiten/activiteiten-planning/activiteiten-planning.component";
import {KamerreserveringdetailsComponent} from "./components/kamers/kamerreserveringdetails/kamerreserveringdetails.component";
import { AuthGuard } from '../frontend/guard/auth.guard';
import { SignupComponent } from '../shared/components/form-signup/signup.component';


const routes: Routes = [
  {
    path: "",
    component: ManagementportalComponent,
    children: [
      { path: 'managementportal/home', component: ManagementPortalHomeComponent,},
      { path: 'managementportal/login', component: ManagementPortalLoginComponent },
      { path: 'managementportal/signup', component: SignupComponent },
      { path: 'managementportal/kamers', component: ManagementPortalKamersComponent, canActivate: [AuthGuard]},
      { path: 'managementportal/kamers/:param', component: ManagementPortalKamersComponent},
      { path: 'managementportal/kamerreserveringen', component: KamerreserveringComponent},
      { path: 'managementportal/kamerreserveringen/:reserveringsnummer', component: KamerreserveringdetailsComponent},
      { path: 'managementportal/kamers-form', component: ManagementPortalKamersFormComponent },
      { path: 'managementportal/activiteiten', component: ManagementPortalActiviteitenComponent },
      { path: 'managementportal/activiteiten/activiteiten-planning', component: ActiviteitenPlanningComponent },
      { path: 'managementportal/activiteiten/activiteit-reserveringen', component: ActiviteitReserveringenComponent },
      { path: 'managementportal/restaurant/tafels', component: ManagementPortalTafelsComponent },
      { path: 'managementportal/restaurant/reserveringen', component: ReserveringenComponent },
      { path: 'managementportal/restaurant/ingredienten', component: ManagementPortalIngredientenComponent },
      { path: 'managementportal/restaurant/gerechten', component: ManagementPortalGerechtenComponent },
      { path: 'managementportal/restaurant/gerechten/:id', component: GerechtenDetailsComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManagementportalRoutingModule {}
