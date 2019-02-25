import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// BackEnd imports
import { BackEndHomeComponent } from './components/home/home.component';
import { BackEndActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { BackEndKamersComponent } from './components/kamers/kamers.component';
import { BackEndLoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KamersPipe } from '../shared/pipes/kamers.pipe';
import { KamersFormComponent } from './components/kamers/kamers-form/kamers-form.component';
import { BackEndComponent } from './backend.component';
import { BackEndRoutingModule } from './backend-routing.module';
import { IngredientenComponent } from './components/restaurant/ingredienten/ingredienten.component';
import { GerechtenComponent } from './components/restaurant/gerechten/gerechten.component';
import { TafelsComponent } from './components/restaurant/tafels/tafels.component';
import { FormTafelComponent } from '../shared/components/form-tafel/form-tafel.component';
import { FormGerechtComponent } from '../shared/components/form-gerecht/form-gerecht.component';
import { FormIngredientComponent } from '../shared/components/form-ingredient/form-ingredient.component';
import { ModalConfirmComponent } from '../shared/components/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [
    BackEndComponent,
    BackEndHomeComponent,
    BackEndActiviteitenComponent,
    BackEndKamersComponent,
    BackEndLoginComponent,
    KamersPipe,
    KamersFormComponent,
    IngredientenComponent,
    GerechtenComponent,
    TafelsComponent,
    FormTafelComponent,
    FormGerechtComponent,
    FormIngredientComponent,
    ModalConfirmComponent
  ],
  imports: [CommonModule, BackEndRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  entryComponents: [FormTafelComponent, FormGerechtComponent, FormIngredientComponent, ModalConfirmComponent]
})
export class BackendModule {}
