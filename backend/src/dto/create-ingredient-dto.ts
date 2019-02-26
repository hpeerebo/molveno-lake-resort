import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateIngredientDto {
    @ApiModelProperty()
    @IsString()
    public naam: string;

    @ApiModelProperty()
    @IsString()
    public eenheid: string;

    @ApiModelProperty()
    @IsNumber()
    public prijs: number;
}
