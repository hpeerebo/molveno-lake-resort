import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateActiviteitPlanningDto {
  @IsNumber()
  @ApiModelProperty()
  public readonly planid: number;

  // @IsNumber()
  // @ApiModelProperty()
  // public readonly actid: number;

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
