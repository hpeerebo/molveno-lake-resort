import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ManagementPortal imports
import { ManagementPortalHomeComponent } from './components/home/home.component';
import { ManagementPortalActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { ManagementPortalKamersComponent } from './components/kamers/kamers.component';
import { ManagementPortalLoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KamersPipe } from '../shared/pipes/kamers.pipe';
import { ManagementPortalKamersFormComponent } from './components/kamers/kamers-form/kamers-form.component';
import { ManagementportalComponent } from './managementportal.component';
import { ManagementportalRoutingModule } from './managementportal-routing.module';
import { ManagementPortalIngredientenComponent } from './components/restaurant/ingredienten/ingredienten.component';
import { ManagementPortalGerechtenComponent } from './components/restaurant/gerechten/gerechten.component';
import { ManagementPortalTafelsComponent } from './components/restaurant/tafels/tafels.component';
import { FormTafelComponent } from '../shared/components/form-tafel/form-tafel.component';
import { FormGerechtComponent } from '../shared/components/form-gerecht/form-gerecht.component';
import { FormIngredientComponent } from '../shared/components/form-ingredient/form-ingredient.component';
import { FormActiviteitComponent } from '../shared/components/form-activiteit/form-activiteit.component'
import { ModalConfirmComponent } from '../shared/components/modal-confirm/modal-confirm.component';
import { ReserveringenComponent } from './components/restaurant/reserveringen/reserveringen.component';
import { FormTafelreserveringComponent } from '../shared/components/form-tafelreservering/form-tafelreservering.component';
import { ActiviteitReserveringenComponent } from './components/activiteiten/activiteit-reserveringen/activiteit-reserveringen.component';
import { FormActiviteitResComponent } from '../shared/components/form-activiteit-res/form-activiteit-res.component';
import { KamerreserveringComponent } from './components/kamers/kamerreserveringen/kamerreservering.component';
import { FormKamerreserveringComponent } from './components/kamers/kamers-form/form-kamerreservering/form-kamerreservering.component';
import {FormKamerreserveringdetailsComponent} from "./components/kamers/kamers-form/form-kamerreserveringdetails/form-kamerreserveringdetails.component";

@NgModule({
  declarations: [
    ManagementportalComponent,
    ManagementPortalHomeComponent,
    ManagementPortalActiviteitenComponent,
    ManagementPortalKamersComponent,
    ManagementPortalLoginComponent,
    KamersPipe,
    ManagementPortalKamersFormComponent,
    ManagementPortalIngredientenComponent,
    ManagementPortalGerechtenComponent,
    ManagementPortalTafelsComponent,
    FormTafelComponent,
    FormTafelreserveringComponent,
    FormGerechtComponent,
    FormIngredientComponent,
    FormActiviteitComponent,   
    FormActiviteitResComponent,
    ModalConfirmComponent,
    ReserveringenComponent,
    ActiviteitReserveringenComponent,
    KamerreserveringComponent,
    FormKamerreserveringComponent,
    FormKamerreserveringdetailsComponent
  ],
  imports: [CommonModule, ManagementportalRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  entryComponents: [FormTafelComponent, FormTafelreserveringComponent, FormGerechtComponent, FormIngredientComponent, FormActiviteitComponent,  FormActiviteitResComponent, ModalConfirmComponent, FormKamerreserveringComponent, FormKamerreserveringdetailsComponent]
})
export class ManagementportalModule {}
