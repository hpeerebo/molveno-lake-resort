import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';

export class CreateActiviteitDto {
  @IsNumber()
  @ApiModelProperty()
  public readonly actid: number;

  @IsString()
  @ApiModelProperty()
  public readonly naam: string;

  @IsString()
  @ApiModelProperty()
  public readonly beschrijving: string;

  @IsString()
  @ApiModelProperty()
  public readonly thumb: string;
}
