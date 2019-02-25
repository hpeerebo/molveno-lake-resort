import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KamersFormComponent } from './components/kamers/kamers-form/kamers-form.component';
import { ManagementPortalHomeComponent } from './components/home/home.component';
import { ManagementPortalLoginComponent } from './components/login/login.component';
import { ManagementPortalKamersComponent } from './components/kamers/kamers.component';
import { IngredientenComponent } from './components/restaurant/ingredienten/ingredienten.component';
import { GerechtenComponent } from './components/restaurant/gerechten/gerechten.component';
import { TafelsComponent } from './components/restaurant/tafels/tafels.component';
import { ManagementPortalActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { ManagementPortalComponent } from './management-portal.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementPortalComponent,
    children: [
      { path: 'management-portal/home', component: ManagementPortalHomeComponent },
      { path: 'management-portal/login', component: ManagementPortalLoginComponent },
      { path: 'management-portal/kamers', component: ManagementPortalKamersComponent },
      { path: 'management-portal/kamers-form', component: KamersFormComponent },
      { path: 'management-portal/activiteiten', component: ManagementPortalActiviteitenComponent },
      { path: 'management-portal/restaurant/tafels', component: TafelsComponent },
      { path: 'management-portal/restaurant/ingredienten', component: IngredientenComponent },
      { path: 'management-portal/restaurant/gerechten', component: GerechtenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManagementPortalRoutingModule {}
