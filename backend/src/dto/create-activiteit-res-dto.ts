import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateActiviteitResDto {
  @IsNumber()
  @ApiModelProperty()
  public readonly id: number;

  @IsString()
  @ApiModelProperty()
  public readonly naamActiviteit: string;

  @IsString()
  @ApiModelProperty()
  public readonly datum: string;

  @IsString()
  @ApiModelProperty()
  public readonly emailGast: string;

  @IsNumber()
  @ApiModelProperty()
  public readonly aantalPersonen: number;
}
