import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateActiviteitResDto {

  @IsString()
  @ApiModelProperty()
  public readonly emailGast: string;

  @IsString()
  @ApiModelProperty()
  public readonly phoneGast: string;

  @IsNumber()
  @ApiModelProperty()
  public readonly aantalPersonen: number;
}
