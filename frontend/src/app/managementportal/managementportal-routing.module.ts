import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementPortalKamersFormComponent } from './components/kamers/kamers-form/kamers-form.component';
import { ManagementPortalHomeComponent } from './components/home/home.component';
import { ManagementPortalLoginComponent } from './components/login/login.component';
import { ManagementPortalKamersComponent } from './components/kamers/kamers.component';
import { ManagementPortalActiviteitenComponent } from "./components/activiteiten/activiteiten.component";
import { ManagementPortalIngredientenComponent } from './components/restaurant/ingredienten/ingredienten.component';
import { ManagementPortalGerechtenComponent } from './components/restaurant/gerechten/gerechten.component';
import { ManagementPortalTafelsComponent } from './components/restaurant/tafels/tafels.component';
import { ManagementportalComponent } from './managementportal.component';
import { ActiviteitReserveringenComponent } from './components/activiteiten/activiteit-reserveringen/activiteit-reserveringen.component';


const routes: Routes = [
  {
    path: '',
    component: ManagementportalComponent,
    children: [
      { path: 'managementportal/home', component: ManagementPortalHomeComponent },
      { path: 'managementportal/login', component: ManagementPortalLoginComponent },
      { path: 'managementportal/kamers', component: ManagementPortalKamersComponent },
      { path: 'managementportal/kamers-form', component: ManagementPortalKamersFormComponent },
      { path: 'managementportal/activiteiten', component: ManagementPortalActiviteitenComponent },
      { path: 'managementportal/activiteiten/activiteit-reserveringen', component: ActiviteitReserveringenComponent },
      { path: 'managementportal/restaurant/tafels', component: ManagementPortalTafelsComponent },
      { path: 'managementportal/restaurant/ingredienten', component: ManagementPortalIngredientenComponent },
      { path: 'managementportal/restaurant/gerechten', component: ManagementPortalGerechtenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManagementportalRoutingModule {}
