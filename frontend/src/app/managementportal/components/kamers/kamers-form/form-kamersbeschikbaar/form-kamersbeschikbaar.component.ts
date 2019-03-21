import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, ValidatorFn, FormGroup, AbstractControl, FormControl } from '@angular/forms';
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

  public readonly kamerSearchForm = new FormGroup({
    datumvan: new FormControl(undefined,[ Validators.required]),
    datumtot: new FormControl(undefined,[Validators.required]),
    kamertype: new FormControl(undefined,[ Validators.required])
  }, this.dateValidationFormGroup());

  /*
  public kamerSearchForm = this.formBuilder.group({
    datumvan: ['undefined'],
    //datumvan: [undefined, Validators.required, this.dateValidationFormGroup],
    datumtot: ['unidefind'],
    kamertype: ['', Validators.required]
  });
  */

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
    this.kamerSearchForm.controls.datumvan.setValue(this.today);
    this.kamerSearchForm.controls.datumtot.setValue(this.tomorrow);
  }
  submitForm() {
    this.activeModal.close(this.kamerSearchForm.value);
  }
  dateValidationFormGroup(): ValidatorFn{
    return (control: AbstractControl) => {
      const formGroup = control as FormGroup;
      if (formGroup.controls.datumvan.value < this.today){
         return {dateFromIsInThePastError: "Datum mag niet in het verleden liggen"}
      }
      if (formGroup.controls.datumtot.value < this.today){
        return {dateToIsInThePastError: "Datum mag niet in het verleden liggen"}
     }
     if (formGroup.controls.datumtot.value < formGroup.controls.datumvan.value){
      return {dateToIsInThePastError: "Vertrek datum moet hoger zijn dan aankomstdatum"}
     }
      else return null;
  }
}

}
