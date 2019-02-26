import { Controller, Get, Post, Body } from '@nestjs/common';
import { Tafel } from 'src/models/tafel';
import { TafelService } from 'src/services/tafel/tafel.service';
import { CreateTafelDto } from 'src/dto/create-tafel-dto';
import { ApiUseTags } from '@nestjs/swagger';
import { Gerecht } from 'src/models/gerecht';
import { GerechtService } from 'src/services/gerecht/gerecht.service';
import { CreateGerechtDto } from 'src/dto/create-gerecht-dto';
import { Ingredient } from 'src/models/ingredient';
import { CreateIngredientDto } from 'src/dto/create-ingredient-dto';
import { IngredientService } from 'src/services/ingredient/ingredient.service';

@ApiUseTags('restaurant')
@Controller('restaurant')
export class RestaurantController {

    constructor(private tafelService: TafelService, private gerechtService: GerechtService, private ingredientenService: IngredientService) { }

    @Get('tafels')
    getTafels(): Tafel[] {
        return this.tafelService.getTafels();
    }

    @Post('tafels')
    createTafel(@Body() body: CreateTafelDto): void {
        this.tafelService.createTafel(body);
    }

    @Get('gerechten')
    getGerechten(): Gerecht[] {
        return this.gerechtService.getGerechten();
    }

    @Post('gerechten')
    createGerecht(@Body() body: CreateGerechtDto): void {
        this.gerechtService.createGerecht(body);
    }

    @Get('ingredienten')
    getIngredienten(): Ingredient[] {
        return this.ingredientenService.getIngredienten();
    }

    @Post('ingredienten')
    createIngredient(@Body() body: CreateIngredientDto): void {
        this.ingredientenService.createIngredient(body);
    }
}
