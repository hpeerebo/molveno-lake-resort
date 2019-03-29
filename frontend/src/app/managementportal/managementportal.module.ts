import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ManagementPortalHomeComponent } from './components/home/home.component';
import { ManagementPortalActiviteitenComponent } from './components/activiteiten/activiteiten.component';
import { ManagementPortalKamersComponent } from './components/kamers/kamers.component';
import { ManagementPortalLoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KamersPipe  } from '../shared/pipes/kamers.pipe';
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
import { GerechtenDetailsComponent } from './components/restaurant/gerechten-details/gerechten-details.component';
import { ApplicationPipesModule } from '../shared/application-pipes/application-pipes.module';
import { FormKamersbeschikbaarComponent } from './components/kamers/kamers-form/form-kamersbeschikbaar/form-kamersbeschikbaar.component';
import { ActiviteitenPlanningComponent } from './components/activiteiten/activiteiten-planning/activiteiten-planning.component';
import { FormActiviteitPlanningComponent } from '../shared/components/form-activiteitplanning/form-activiteitplanning.component';
import {KamerreserveringdetailsComponent} from './components/kamers/kamerreserveringdetails/kamerreserveringdetails.component';
import { SignupComponent } from '../shared/components/form-signup/signup.component';
import { FormPrintKamerreseveringComponent } from './components/kamers/kamers-form/form-print-kamerresevering/form-print-kamerresevering.component';
import { FormEmailKamerreseveringComponent } from './components/kamers/kamers-form/form-email-kamerresevering/form-email-kamerresevering.component';
import { FormDownloadKamerreseveringComponent } from './components/kamers/kamers-form/form-download-kamerresevering/form-download-kamerresevering.component';
import {PDFExportModule} from "@progress/kendo-angular-pdf-export";
import { KamerModalConfirmComponent } from './components/kamers/kamers-form/kamer-modal-confirm/kamer-modal-confirm.component';
import { FormKamerreseveringDetailsComponent } from './components/kamers/kamers-form/form-kamerresevering-details/form-kamerresevering-details.component';

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
    FormActiviteitPlanningComponent,
    ModalConfirmComponent,
    ReserveringenComponent,
    ActiviteitReserveringenComponent,
    KamerreserveringComponent,
    FormKamerreserveringComponent,
    KamerreserveringdetailsComponent,
    GerechtenDetailsComponent,
    ActiviteitenPlanningComponent,
    FormKamersbeschikbaarComponent,
    SignupComponent,
    FormPrintKamerreseveringComponent,
    FormEmailKamerreseveringComponent,
    FormDownloadKamerreseveringComponent,
    KamerModalConfirmComponent,
    FormKamerreseveringDetailsComponent
  ],
  imports: [CommonModule, ManagementportalRoutingModule, NgbModule, FormsModule, ReactiveFormsModule, ApplicationPipesModule, PDFExportModule],
  entryComponents: [FormTafelComponent, FormTafelreserveringComponent, FormGerechtComponent, FormIngredientComponent, FormActiviteitComponent,  FormActiviteitResComponent, FormActiviteitPlanningComponent, ModalConfirmComponent, FormKamerreserveringComponent, KamerreserveringdetailsComponent, FormKamersbeschikbaarComponent, FormPrintKamerreseveringComponent, FormEmailKamerreseveringComponent, SignupComponent, FormDownloadKamerreseveringComponent, KamerModalConfirmComponent, FormKamerreseveringDetailsComponent],
  providers: [FormKamerreseveringDetailsComponent],

})
export class ManagementportalModule {

  }


