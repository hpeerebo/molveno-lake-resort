import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FrontendModule} from "./frontend/frontend.module";
import {ManagementportalModule} from "./managementportal/managementportal.module";
import {HttpClientModule} from '@angular/common/http';
import {RoomService} from './services/rooms.service';
import { SortGridService } from './shared/services/sort-grid.service';
import {DateFunctions} from "./shared/services/date-functions";
import { FormActiviteitMaakReserveringComponent } from './shared/components/form-activiteit-maak-reservering/form-activiteit-maak-reservering.component';
import { FormActiviteitMaakPlanningComponent } from './shared/components/form-activiteit-maak-planning/form-activiteit-maak-planning.component';


@NgModule({
  declarations: [AppComponent, FormActiviteitMaakReserveringComponent, FormActiviteitMaakPlanningComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FrontendModule,
    ManagementportalModule,
    HttpClientModule,

  ],
  providers: [RoomService, SortGridService, DateFunctions],
  bootstrap: [AppComponent]
})
export class AppModule {}
