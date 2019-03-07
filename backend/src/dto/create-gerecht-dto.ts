import { ApiModelProperty } from '@nestjs/swagger';
import { Length, IsEnum, IsPositive } from 'class-validator';
import { GerechtType } from 'src/enums/gerechttype';
import { GerechtSubType } from 'src/enums/gerechtsubtype';
import { GerechtRepoEntity } from 'src/entities/gerecht.entity';

export class CreateGerechtDto {
    @ApiModelProperty()
    @Length(1, 50)
    public readonly naam: string;

    @ApiModelProperty()
    @IsEnum(GerechtType, {message: JSON.stringify(GerechtType)})
    public readonly type: GerechtType;

    @ApiModelProperty()
    @IsEnum(GerechtSubType, {message: JSON.stringify(GerechtSubType)})
    public readonly subtype: GerechtSubType;

    @ApiModelProperty()
    @IsPositive()
    public readonly prijs: number;

    mapToGerechtEntity(): GerechtRepoEntity {
        return new GerechtRepoEntity(this.naam, this.type, this.subtype, this.prijs);
    }
}
