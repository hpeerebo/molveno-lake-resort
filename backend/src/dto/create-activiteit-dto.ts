import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateActiviteitDto {
  @IsString()
  @ApiModelProperty()
  public readonly naam: string;

  @IsString()
  @ApiModelProperty()
  public readonly beschrijving: string;

  @IsNumber()
  @ApiModelProperty()
  public readonly capaciteit: number;

  @IsNumber()
  @ApiModelProperty()
  public readonly datum: number;

  @IsNumber()
  @ApiModelProperty()
  public readonly prijs: number;

  @IsString()
  @ApiModelProperty()
  public readonly thumb: string;

}
