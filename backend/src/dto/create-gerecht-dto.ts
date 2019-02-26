import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateGerechtDto {
    @ApiModelProperty()
    @IsString()
    public naam: string;

    @ApiModelProperty()
    @IsString()
    public type: string;

    @ApiModelProperty()
    @IsString()
    public subtype: string;

    @ApiModelProperty()
    @IsNumber()
    public prijs: number;
}
