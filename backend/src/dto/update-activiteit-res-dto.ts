import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateActiviteitResDto {

  @IsString()
  @ApiModelProperty()
  public readonly emailGast: string;

  @IsString()
  @ApiModelProperty()
  public readonly phoneGast: string;

  @IsNumber()
  @ApiModelProperty()
  public readonly aantalPersonen: number;

  @IsNumber()
  @ApiModelProperty()
  public readonly resid: number;
}
