import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/models/ingredient';
import { CreateIngredientDto } from 'src/dto/create-ingredient-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientRepoEntity } from 'src/entities/ingredient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {

    constructor(
        @InjectRepository(IngredientRepoEntity)
        private readonly ingredientRepository: Repository<IngredientRepoEntity>,
    ) { }

    async getIngredienten(): Promise<Ingredient[]> {
        const ingredientEntities = await this.ingredientRepository.find();
        const ingredienten = ingredientEntities.map(ingredientEntity => ingredientEntity.mapToIngredient());
        return ingredienten;
    }

    createIngredient(ingredientDto: CreateIngredientDto): void {
        this.ingredientRepository.save(ingredientDto.mapToIngredientEntity());
    }
}
