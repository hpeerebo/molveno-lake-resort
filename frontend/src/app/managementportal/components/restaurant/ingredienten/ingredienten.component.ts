import { Component, OnInit } from '@angular/core';
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
export class ManagementPortalIngredientenComponent implements OnInit {

  columnTitle: string = "naam";
  public columnSortClickHandler(event: 'naam' | 'eenheid' | 'prijs'): string {
    this.columnTitle = event;
    return this.columnTitle;
  }

  public ingredienten$: Observable<Ingredient[]> = this.ingredientenService.data$;

  constructor(private ingredientenService: IngredientenService, private modalService: NgbModal) { }

  ngOnInit() { }

  public handleNewIngredientButtonClick() {
    this.openFormIngredientModal();
  }

  public handleModifyIngredientButtonClick(ingredient: Ingredient) {
    this.openFormIngredientModal(ingredient);
  }

  public handleDeleteIngredientButtonClick(ingredient: Ingredient) {
    this.verwijderIngredient(ingredient);
  }

  private async openFormIngredientModal(ingredient?: Ingredient) {
    const modal = this.modalService.open(FormIngredientComponent);

    if (ingredient) {
      modal.componentInstance.ingredient = ingredient;
    }

    try {
      const result = await modal.result;
      if (result.id) this.ingredientenService.updateIngredient(result);
      else this.ingredientenService.addNewIngredient(result);
    } catch (message) { }
  }

  private async verwijderIngredient(ingredient: Ingredient) {
    try {
      const result = await this.modalService.open(ModalConfirmComponent).result;
      if (result === 'yes') this.ingredientenService.deleteIngredient(ingredient);
    } catch (message) { }
  }
}
