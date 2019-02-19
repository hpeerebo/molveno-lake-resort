import { Component, OnInit } from '@angular/core';
//import { RoomsService, KamerResponse, Kamer } from 'src/app/services/rooms.service';
import { KamersComponent } from 'src/app/frontend/components/kamers/kamers.component';
import { BackEndKamersComponent } from '../kamers.component';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
import { Kamer } from '../kamer';

@Component({
  selector: 'app-kamers-form',
  templateUrl: './kamers-form.component.html',
  styleUrls: ['./kamers-form.component.scss']
})
export class KamersFormComponent implements OnInit {

  kamerSoort = ['Budget', 'Standaard','Lux'];
  kamerUitzicht = ['Zeezicht', 'Bergzicht','Tuinzicht'];

  model = new Kamer(0, this.kamerSoort[0], this.kamerUitzicht[0], 3, 50, "free");
 
  submitted = false;

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() { this.submitted = true; 
    console.log(this.model.kamerNummer + " + " + this.model.kamerType + " + " + this.model.kamerLigging);
    console.log(this.model);
    
  }

  showFormControls(form: any) {
    return form && form.controls['KamerNummer'] &&
    form.controls['KamerNummer'].value;
  }

  constructor() { 
  }
 
  ngOnInit() {
    
  }

}
