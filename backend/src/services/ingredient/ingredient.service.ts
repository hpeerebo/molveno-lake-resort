import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/models/ingredient';
import { CreateIngredientDto } from 'src/dto/create-ingredient-dto';

@Injectable()
export class IngredientService {
    private ingredienten: Ingredient[] = [];

    getIngredienten(): Ingredient[] {
        return this.ingredienten;
    }

    createIngredient(body: CreateIngredientDto): void {
        this.ingredienten = [...this.ingredienten, new Ingredient(body.naam, body.eenheid, body.prijs)];
    }
}
