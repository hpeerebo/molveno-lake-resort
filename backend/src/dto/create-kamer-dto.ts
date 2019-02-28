import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'node_modules/class-validator/index';

export class CreateKamerDto {
  @IsNumber()
  @ApiModelProperty()
  public readonly kamerNummer: number;
  @IsString()
  @ApiModelProperty()
  public readonly kamerType: string;
  @IsString()
  @ApiModelProperty()
  public readonly kamerLigging: string;
  @IsNumber()
  @ApiModelProperty()
  public readonly aantalPersonen: number;
  @IsNumber()
  @ApiModelProperty()
  public readonly prijs: number;
  @IsString()
  @ApiModelProperty()
  public readonly status: string;
}
