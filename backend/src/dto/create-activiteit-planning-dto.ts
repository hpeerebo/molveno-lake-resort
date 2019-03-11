import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateActiviteitPlanningDto {
  @IsNumber()
  @ApiModelProperty()
  public readonly id: number;

  @IsString()
  @ApiModelProperty()
  public readonly naam: string;

  @IsNumber()
  @ApiModelProperty()
  public readonly capaciteit: number;

  @IsNumber()
  @ApiModelProperty()
  public readonly datum: number;

  @IsNumber()
  @ApiModelProperty()
  public readonly prijs: number;
}
