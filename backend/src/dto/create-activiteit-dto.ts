import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';

export class CreateActiviteitDto {
  @IsNumber()
  @ApiModelProperty()
  public readonly id: number;

  @IsString()
  @ApiModelProperty()
  public readonly naam: string;

  @IsString()
  @ApiModelProperty()
  public readonly beschrijving: string;

  @IsNumber()
  @ApiModelProperty()
  public readonly capaciteit: number;

  @IsDate()
  @ApiModelProperty()
  public readonly datum: Date;

  @IsNumber()
  @ApiModelProperty()
  public readonly prijs: number;

  @IsString()
  @ApiModelProperty()
  public readonly thumb: string;
}
