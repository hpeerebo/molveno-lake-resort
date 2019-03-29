import { Component, OnInit } from '@angular/core';
import { GerechtenService } from 'src/app/services/gerechten.service';
import { GerechtDetails } from 'src/app/models/gerecht-details';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, take } from 'rxjs/operators';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientenService } from 'src/app/services/ingredienten.service';

@Component({
  selector: 'app-gerechten-details',
  templateUrl: './gerechten-details.component.html',
  styleUrls: ['./gerechten-details.component.scss']
})
export class GerechtenDetailsComponent implements OnInit {
  public showIngredientenTable: boolean = false;
  private gerechtId: number = 0;

  public gerechtDetails$: Observable<GerechtDetails | undefined> = this.gerechtService.gerechtDetails$;

  public ingredienten$: Observable<Ingredient[]> = this.ingredientenService.data$;

  constructor(private route: ActivatedRoute, private gerechtService: GerechtenService, private ingredientenService: IngredientenService) { }

  ngOnInit() {
    this.route.params.pipe(
      take(1),
      tap(params => this.gerechtService.getGerechtDetails(params.id)),
      tap(params => this.gerechtId = params.id)
    ).subscribe();
   }

  toggleIngredientenTable() {
    this.showIngredientenTable = !this.showIngredientenTable;
  }

  handleAddIngredientEvent(ingredient: Ingredient) {
    this.gerechtService.addIngredientToGerecht(this.gerechtId, ingredient);
  }
}
