import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-kamersbeschikbaar',
  templateUrl: './form-kamersbeschikbaar.component.html',
  styleUrls: ['./form-kamersbeschikbaar.component.scss']
})
export class FormKamersbeschikbaarComponent implements OnInit {
  kamerSoort = ['Budget', 'Standaard','Lux'];
  public today: string = "";
  public kamerSearchForm = this.formBuilder.group({
    datumvan: ['', Validators.required],
    datumtot: ['', Validators.required],
    kamertype: ['', Validators.required]
  });

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    const currentDate:Date = new Date();
    let dd:any = currentDate.getDate();
    let mm:any = currentDate.getMonth()+1;
    let yyyy:any = currentDate.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    this.today = yyyy + '-' + mm + '-' + dd;
  }

  ngOnInit() {
  }
  submitForm() {
    this.activeModal.close(this.kamerSearchForm.value);
  }

}
