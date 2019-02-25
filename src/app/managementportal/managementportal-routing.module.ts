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


const routes: Routes = [
  {
    path: '',
    component: ManagementportalComponent,
    children: [
      { path: 'management-portal/home', component: ManagementPortalHomeComponent },
      { path: 'management-portal/login', component: ManagementPortalLoginComponent },
      { path: 'management-portal/kamers', component: ManagementPortalKamersComponent },
      { path: 'management-portal/kamers-form', component: ManagementPortalKamersFormComponent },
      { path: 'management-portal/activiteiten', component: ManagementPortalActiviteitenComponent },
      { path: 'management-portal/restaurant/tafels', component: ManagementPortalTafelsComponent },
      { path: 'management-portal/restaurant/ingredienten', component: ManagementPortalIngredientenComponent },
      { path: 'management-portal/restaurant/gerechten', component: ManagementPortalGerechtenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManagementportalRoutingModule {}
