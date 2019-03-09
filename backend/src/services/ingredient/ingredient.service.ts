import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Ingredient } from 'src/models/ingredient';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientRepoEntity } from 'src/entities/ingredient.entity';
import { Repository, DeleteResult, UpdateResult, Not } from 'typeorm';

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
        const ingredientExists = !!await this.ingredientRepository.findOne({ naam: ingredientEntity.naam });
        if (ingredientExists) throw new HttpException('Een ingredient met deze naam bestaat al', HttpStatus.CONFLICT);

        return this.ingredientRepository.save(ingredientEntity);
    }

    async updateIngredient(id: number, ingredientEntity: IngredientRepoEntity): Promise<UpdateResult> {
        const ingredientExists = !!(await this.ingredientRepository.findOne({ id }));
        if (!ingredientExists) throw new HttpException('Er bestaat geen ingredient met dit id', HttpStatus.NOT_FOUND);

        const naamExists = !!(await this.ingredientRepository.findOne({ id: Not(id), naam: ingredientEntity.naam }));
        if (naamExists) throw new HttpException('Een ingredient met deze naam bestaat al', HttpStatus.CONFLICT);

        return this.ingredientRepository.update({ id }, ingredientEntity);
    }

    async deleteIngredient(id: number): Promise<DeleteResult> {
        const ingredientExists = !!(await this.ingredientRepository.findOne({ id }));
        if (!ingredientExists) throw new HttpException('Er bestaat geen ingredient met dit id', HttpStatus.NOT_FOUND);

        return this.ingredientRepository.delete({ id });
    }
}
