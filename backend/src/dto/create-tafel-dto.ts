import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateTafelDto {
    @ApiModelProperty()
    @IsNumber()
    public readonly nummer: number;

    @ApiModelProperty()
    @IsNumber()
    public readonly personen: number;
}
