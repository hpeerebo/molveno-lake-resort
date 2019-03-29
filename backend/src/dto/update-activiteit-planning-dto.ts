import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateActiviteitPlanningDto {

  @IsNumber()
  @ApiModelProperty()
  public readonly actCapaciteit: number;
  
  @IsString()
  @ApiModelProperty()
  public readonly actDate: string;

  @IsNumber()
  @ApiModelProperty()
  public readonly actPrijs: number;

  @IsNumber()
  @ApiModelProperty()
  public readonly planid: number;
}
