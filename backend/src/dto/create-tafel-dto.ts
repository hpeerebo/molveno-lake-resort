import { ApiModelProperty } from '@nestjs/swagger';
import { Length, Min, Max, IsInt } from 'class-validator';
import { TafelRepoEntity } from 'src/entities/tafel.entity';

export class CreateTafelDto {
    @ApiModelProperty()
    @Length(1, 50)
    public readonly kenmerk: string;

    @ApiModelProperty()
    @IsInt()
    @Min(1)
    @Max(16)
    public readonly personen: number;

    mapToTafelEntity(): TafelRepoEntity {
        return new TafelRepoEntity(this.kenmerk, this.personen);
    }
}
