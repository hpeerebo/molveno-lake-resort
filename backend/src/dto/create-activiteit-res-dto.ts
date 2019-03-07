import { IsString, IsNumber } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateActiviteitResDto {
    @IsString()
    @ApiModelProperty()
    public readonly naamActiviteit: string;

    @IsNumber()
    @ApiModelProperty()
    public readonly datum: number;

    @IsString()
    @ApiModelProperty()
    public readonly emailGast: string;

    @IsNumber()
    @ApiModelProperty()
    public readonly aantalPersonen: number;
  }
