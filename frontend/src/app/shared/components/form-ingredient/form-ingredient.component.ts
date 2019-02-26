import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-form-ingredient',
  templateUrl: './form-ingredient.component.html',
  styleUrls: ['./form-ingredient.component.scss']
})
export class FormIngredientComponent implements OnInit {
  @Input() ingredient: Ingredient | undefined = undefined;

  public ingredientForm = this.formBuilder.group({
    naam: ['', Validators.required],
    eenheid: ['', Validators.required],
    prijs: [0, Validators.min(0)]
  });

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.ingredient) {
      this.ingredientForm.setValue({
        naam: this.ingredient.naam,
        eenheid: this.ingredient.eenheid,
        prijs: this.ingredient.prijs
      });
    }
  }

  submitForm() {
    this.activeModal.close(this.ingredientForm.value);
  }

  get naam() {
    return this.ingredientForm.get('naam');
  }

  get eenheid() {
    return this.ingredientForm.get('eenheid');
  }

  get prijs() {
    return this.ingredientForm.get('prijs');
  }
}
