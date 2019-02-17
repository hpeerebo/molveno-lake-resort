import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// BackEnd imports
import { BackEndHomeComponent } from './components/home/home.component';
import { BackEndActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { BackEndKamersComponent } from './components/kamers/kamers.component';
import { BackEndLoginComponent } from './components/login/login.component';
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
    IngredientenComponent,
    GerechtenComponent,
    TafelsComponent,
    FilterPipe],
  imports: [
    CommonModule,
    BackEndRoutingModule
  ]
})
export class BackendModule { }
