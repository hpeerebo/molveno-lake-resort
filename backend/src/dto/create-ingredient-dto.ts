import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, Length, IsPositive } from 'class-validator';
import { Eenheid } from 'src/enums/eenheid';
import { IngredientRepoEntity } from 'src/entities/ingredient.entity';

export class CreateIngredientDto {
    @ApiModelProperty()
    @Length(1, 50)
    public readonly naam: string;

    @ApiModelProperty()
    @IsEnum(Eenheid, {message: JSON.stringify(Eenheid)})
    public readonly eenheid: Eenheid;

    @ApiModelProperty()
    @IsPositive()
    public readonly prijs: number;

    mapToIngredientEntity(): IngredientRepoEntity {
        return new IngredientRepoEntity(this.naam, this.eenheid, this.prijs);
    }
}
