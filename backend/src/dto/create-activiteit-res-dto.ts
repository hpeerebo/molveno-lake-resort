import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateActiviteitResDto {
  @IsNumber()
  @ApiModelProperty()
  public readonly resid: number;

  @IsNumber()
  @ApiModelProperty()
  public readonly planid: number;

  @IsString()
  @ApiModelProperty()
  public readonly emailGast: string;

  @IsNumber()
  @ApiModelProperty()
  public readonly aantalPersonen: number;
}
