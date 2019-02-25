import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { KamersComponent } from 'src/app/frontend/components/kamers/kamers.component';
import { ManagementPortalKamersComponent } from '../kamers.component';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
import { Kamer } from '../kamer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-kamers-form',
  templateUrl: './kamers-form.component.html',
  styleUrls: ['./kamers-form.component.scss']
})
export class KamersFormComponent implements OnInit {

  kamerSoort = ['Budget', 'Standaard','Lux'];
  kamerUitzicht = ['Zeezicht', 'Bergzicht','Tuinzicht'];
 @Input() model = new Kamer(0, this.kamerSoort[0], this.kamerUitzicht[0], 3, 50, "free");
// @Output() roomSubmitted: EventEmitter<Kamer> = new EventEmitter<Kamer>();
  submitted = false;

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() { this.submitted = true;
    this.activeModal.close(this.model);
//   this.roomSubmitted.emit(this.model);
// this.router.navigate(['kamer-details']);
  }

  showFormControls(form: any) {
    return form && form.controls['KamerNummer'] &&
    form.controls['KamerNummer'].value;
  }

  constructor(public activeModal: NgbActiveModal, private router : Router) {
  }

  ngOnInit() {
  }

}
