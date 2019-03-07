import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, Min, Max, IsString } from 'class-validator';
import { TafelreserveringRepoEntity } from 'src/entities/tafelreservering.entity';

export class CreateTafelreserveringDto {
    @ApiModelProperty()
    @IsString()
    public readonly aanvangstijd: string;

    @ApiModelProperty()
    @IsInt()
    @Min(1)
    @Max(40)
    public readonly personen: number;

    @ApiModelProperty()
    @IsString()
    public readonly naam: string;

    @ApiModelProperty()
    @IsString()
    public readonly telefoon: string;

    mapToTafelreserveringEntity(): TafelreserveringRepoEntity {
        return new TafelreserveringRepoEntity(this.aanvangstijd, this.personen, this.naam, this.telefoon );
    }
}
