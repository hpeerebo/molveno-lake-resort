import { Component } from '@angular/core';
import { IngredientenService } from 'src/app/services/ingredienten.service';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormIngredientComponent } from 'src/app/shared/components/form-ingredient/form-ingredient.component';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-ingredienten',
  templateUrl: './ingredienten.component.html',
  styleUrls: ['./ingredienten.component.scss']
})
export class ManagementPortalIngredientenComponent {

  columnTitle: string = "naam";
  public columnSortClickHandler(event: string): string {
    this.columnTitle = event;
    return this.columnTitle;
  }

  public ingredienten$: Observable<Ingredient[]> = this.ingredientenService.data$;

  constructor(private ingredientenService: IngredientenService, private modalService: NgbModal) {}

  openFormIngredientModal(ingredient?: Ingredient) {
    const modal = this.modalService.open(FormIngredientComponent);

    if (ingredient) {
      modal.componentInstance.ingredient = ingredient;
    }

    modal.result
      .then(result => {
        if (result.id) {
          this.ingredientenService.updateIngredient(result);
        } else {
          this.ingredientenService.addNewIngredient(result);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderIngredient(ingredient: Ingredient) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === 'yes') {
          this.ingredientenService.deleteIngredient(ingredient);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
