import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-form-kamersbeschikbaar',
  templateUrl: './form-kamersbeschikbaar.component.html',
  styleUrls: ['./form-kamersbeschikbaar.component.scss']
})
export class FormKamersbeschikbaarComponent implements OnInit {
  kamerSoort = ['Budget', 'Standaard','Lux'];
  public today: string = "";
  public tomorrow: string = "";
  public kamerSearchForm = this.formBuilder.group({
    datumvan: ['undefined'],
    datumtot: ['unidefind'],
    kamertype: ['', Validators.required]
  });

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    const currentDate:Date = new Date();
    let dd:any = currentDate.getDate();
    let mm:any = currentDate.getMonth()+1;
    let yyyy:any = currentDate.getFullYear();
    let ddt:any = currentDate.getDate() + 1;

    if(dd<10) {
        dd = '0'+dd
    }
    if(ddt<10) {
      ddt = '0'+ddt
  }

    if(mm<10) {
        mm = '0'+mm
    }

    this.today = yyyy + '-' + mm + '-' + dd;
    this.tomorrow = yyyy + '-' + mm + '-' + ddt;
  }

  ngOnInit() {
  }
  submitForm() {
    this.activeModal.close(this.kamerSearchForm.value);
  }
  checkDates(){
    if (this.kamerSearchForm.value.datumtot < this.kamerSearchForm.value.datumvan){
      console.log ('datumtot kleiner dan datumvan');
      this.kamerSearchForm.setErrors(new Validators());
    }
  }

}
