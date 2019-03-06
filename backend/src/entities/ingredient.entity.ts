import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Eenheid } from 'src/enums/eenheid';
import { Ingredient } from 'src/models/ingredient';

@Entity('ingredient')
export class IngredientRepoEntity {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    public readonly naam: string;

    @Column({ type: 'varchar', length: 10 })
    public readonly eenheid: Eenheid;

    @Column('numeric')
    public readonly prijs: number;

    constructor(
        naam: string,
        eenheid: Eenheid,
        prijs: number,
        ) {
        this.naam = naam;
        this.eenheid = eenheid;
        this.prijs = prijs;
    }

    mapToIngredient(): Ingredient {
        return new Ingredient(this.naam, this.eenheid, this.prijs);
    }
}
