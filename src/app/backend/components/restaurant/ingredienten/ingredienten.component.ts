import { Component } from '@angular/core';
import { IngredientenService } from 'src/app/services/ingredienten.service';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormIngredientComponent } from 'src/app/shared/components/form-ingredient/form-ingredient.component';

@Component({
  selector: 'app-ingredienten',
  templateUrl: './ingredienten.component.html',
  styleUrls: ['./ingredienten.component.scss']
})
export class IngredientenComponent {
  public ingredienten: Observable<Ingredient[]> = this.ingredientenService.getAllIngredienten();

  constructor(private ingredientenService: IngredientenService, private modalService: NgbModal) {}

  openFormIngredientModal(ingredient?: Ingredient) {
    const modal = this.modalService.open(FormIngredientComponent);

    if (ingredient) {
      modal.componentInstance.ingredient = ingredient;
    }

    modal.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderIngredient(ingredient: Ingredient) {
    console.log(ingredient);
  }
}
