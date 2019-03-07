import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Ingredient } from 'src/models/ingredient';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientRepoEntity } from 'src/entities/ingredient.entity';
import { Repository, DeleteResult } from 'typeorm';

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

    async createIngredient(ingredientEntity: IngredientRepoEntity): Promise<IngredientRepoEntity> {
        const ingredientExists = !!await this.ingredientRepository.findOne({ where: { naam: ingredientEntity.naam } });
        if (!ingredientExists) {
            return this.ingredientRepository.save(ingredientEntity);
        } else {
            throw new HttpException('Een ingredient met deze naam bestaat al', HttpStatus.CONFLICT);
        }
    }

    deleteIngredient(id: number): Promise<DeleteResult> {
        return this.ingredientRepository.delete({id});
    }
}
