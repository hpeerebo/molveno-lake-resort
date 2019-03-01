import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, Length, Min, Max } from 'class-validator';

export class CreateTafelDto {
    @ApiModelProperty()
    @IsString()
    @Length(1, 50)
    public readonly kenmerk: string;

    @ApiModelProperty()
    @IsInt()
    @Min(1)
    @Max(16)
    public readonly personen: number;
}
