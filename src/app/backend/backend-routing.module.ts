import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KamersFormComponent } from './components/kamers/kamers-form/kamers-form.component';
import { BackEndHomeComponent } from './components/home/home.component';
import { BackEndLoginComponent } from './components/login/login.component';
import { BackEndKamersComponent } from './components/kamers/kamers.component';
import { IngredientenComponent } from './components/restaurant/ingredienten/ingredienten.component';
import { GerechtenComponent } from './components/restaurant/gerechten/gerechten.component';
import { TafelsComponent } from './components/restaurant/tafels/tafels.component';
import { BackEndActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { BackEndComponent } from './backend.component';

const routes: Routes = [
  {
    path: '',
    component: BackEndComponent,
    children: [
      { path: 'backend/home', component: BackEndHomeComponent },
      { path: 'backend/login', component: BackEndLoginComponent },
      { path: 'backend/kamers', component: BackEndKamersComponent },
      { path: 'backend/kamers-form', component: KamersFormComponent },
      { path: 'backend/activiteiten', component: BackEndActiviteitenComponent },
      { path: 'backend/restaurant/tafels', component: TafelsComponent },
      { path: 'backend/restaurant/ingredienten', component: IngredientenComponent },
      { path: 'backend/restaurant/gerechten', component: GerechtenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BackEndRoutingModule {}
