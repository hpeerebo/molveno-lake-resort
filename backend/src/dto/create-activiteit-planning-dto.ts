import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateActiviteitPlanningDto {

  @IsString()
  @ApiModelProperty()
  public readonly actdate: string;

  @IsNumber()
  @ApiModelProperty()
  public readonly actprijs: number;

  @IsNumber()
  @ApiModelProperty()
  public readonly actcapaciteit: number;
}
