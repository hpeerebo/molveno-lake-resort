import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { GerechtType } from 'src/enums/gerechttype';
import { GerechtSubType } from 'src/enums/gerechtsubtype';
import { Gerecht } from 'src/models/gerecht';
import { IngredientRepoEntity } from './ingredient.entity';
import { GerechtDetails } from 'src/models/gerecht-details';

@Entity('gerecht')
export class GerechtRepoEntity {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    public readonly naam: string;

    @Column({ type: 'varchar', length: 20 })
    public readonly type: GerechtType;

    @Column({ type: 'varchar', length: 20 })
    public readonly subtype: GerechtSubType;

    @Column('numeric')
    public readonly prijs: number;

    @ManyToMany(type => IngredientRepoEntity, ingredient => ingredient.gerechten, {
		cascade: true
	})
    
    @JoinTable({name: 'gerecht_ingredient'})
    ingredienten: IngredientRepoEntity[];

    constructor(
        naam: string,
        type: GerechtType,
        subtype: GerechtSubType,
        prijs: number,
    ) {
        this.naam = naam;
        this.type = type;
        this.subtype = subtype;
        this.prijs = prijs;
    }

    mapToGerecht(): Gerecht {
        return new Gerecht(this.id, this.naam, this.type, this.subtype, this.prijs);
    }

    mapToGerechtDetails(): GerechtDetails {
        return new GerechtDetails(this.id, this.naam, this.type, this.subtype, this.prijs, this.ingredienten);
    }

    addIngredient(ingredientRepoEntity: IngredientRepoEntity): void {
		this.ingredienten = this.ingredienten ? [...this.ingredienten, ingredientRepoEntity] : [ingredientRepoEntity];
	}
}
