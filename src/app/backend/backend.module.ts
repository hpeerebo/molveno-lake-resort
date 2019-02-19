import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// BackEnd imports
import { BackEndHomeComponent } from './components/home/home.component';
import { BackEndActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { BackEndKamersComponent } from './components/kamers/kamers.component';
import { BackEndLoginComponent } from './components/login/login.component';
import { FormControl, FormsModule } from '@angular/forms';
import { KamersPipe } from '../shared/pipes/kamers.pipe';
import { KamersFormComponent } from './components/kamers/kamers-form/kamers-form.component';
import { KamerDetailsComponent } from './components/kamers/kamer-details/kamer-details.component';
import { BackEndComponent } from './backend.component';
import { BackEndRoutingModule } from './backend-routing.module';
import { IngredientenComponent } from './components/restaurant/ingredienten/ingredienten.component';
import { GerechtenComponent } from './components/restaurant/gerechten/gerechten.component';
import { TafelsComponent } from './components/restaurant/tafels/tafels.component';
import { FilterPipe } from './components/restaurant/filter.pipe';

@NgModule({
  declarations: [
    BackEndComponent,
    BackEndHomeComponent,
    BackEndActiviteitenComponent,
    BackEndKamersComponent,
    BackEndLoginComponent,
    // BackEndRestaurantComponent, commented due to merge conflict resolve (team restaurant check if this is stil necessary)
    KamersPipe,
    KamersFormComponent,
    KamerDetailsComponent,
    IngredientenComponent,
    GerechtenComponent,
    TafelsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    BackEndRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class BackendModule { }
