import { ApiModelProperty } from "@nestjs/swagger";
import { IsDateString } from "class-validator";

export class CheckTafelreserveringDto {
    @ApiModelProperty()
    @IsDateString()
    public readonly aanvangstijd: string;
}
