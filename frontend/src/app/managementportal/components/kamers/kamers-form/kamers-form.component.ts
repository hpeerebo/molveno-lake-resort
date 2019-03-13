import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Kamer } from '../../../../models/kamer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-kamers-form',
  templateUrl: './kamers-form.component.html',
  styleUrls: ['./kamers-form.component.scss']
})
export class ManagementPortalKamersFormComponent implements OnInit {
  field: string = "";
  public clickColumnHandler(event: string): string {
    this.field = event;
    return console.log(this.field), this.field;
  }

  kamerSoort = ['Budget', 'Standaard','Lux'];
  kamerUitzicht = ['Meerzicht', 'Bergzicht','Tuinzicht'];
 @Input() model = new Kamer("0", this.kamerSoort[0], this.kamerUitzicht[0], 3, 50,);
  action = "";
  submitted = false;

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() { this.submitted = true;
    this.activeModal.close(this.model);
  }

  showFormControls(form: any) {
    return form && form.controls['KamerNaam'] &&
    form.controls['KamerNaam'].value;
  }

  constructor(public activeModal: NgbActiveModal, private router : Router) {
  }

  ngOnInit() {
  }

}
