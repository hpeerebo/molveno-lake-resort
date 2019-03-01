import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'node_modules/class-validator/index';
import { KamerEntity } from 'src/models/entities/kamer.entity';

export class CreateKamerDto {
  @IsString()
  @ApiModelProperty()
  public readonly kamerNummer: string;
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
 // @IsString()
 // @ApiModelProperty()
 // public readonly status: string;
 kamerEntity() {
  return new KamerEntity(
    this.kamerNummer,
    this.kamerType,
    this.kamerLigging,
    this.aantalPersonen,
    this.prijs,
  );
}
}
