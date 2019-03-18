import { IsInt } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class AddIngredientDto {
    @ApiModelProperty()
    @IsInt()
    public readonly id: number;
}
