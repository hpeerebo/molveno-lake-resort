import { Controller, Get, Post, Body } from '@nestjs/common';
import { Tafel } from 'src/models/tafel';
import { TafelService } from 'src/services/tafel/tafel.service';
import { CreateTafelDto } from 'src/dto/create-tafel-dto';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
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
    @ApiOperation({ title: 'Haal een lijst op van alle tafels' })
    getTafels(): Promise<Tafel[]>  {
        return this.tafelService.getTafels();
    }

    @Post('tafels')
    @ApiOperation({ title: 'Voeg een nieuwe tafel toe' })
    @ApiResponse({ status: 201, description: 'De tafel is succesvol aangemaakt' })
    @ApiResponse({ status: 409, description: 'Een tafel met dit kenmerk bestaat al' })
    createTafel(@Body() tafelDto: CreateTafelDto): Promise<void> {
        return this.tafelService.createTafel(tafelDto);
    }

    @Get('gerechten')
    getGerechten(): Promise<Gerecht[]> {
        return this.gerechtService.getGerechten();
    }

    @Post('gerechten')
    createGerecht(@Body() gerechtDto: CreateGerechtDto): void {
        this.gerechtService.createGerecht(gerechtDto);
    }

    @Get('ingredienten')
    getIngredienten(): Promise<Ingredient[]> {
        return this.ingredientenService.getIngredienten();
    }

    @Post('ingredienten')
    createIngredient(@Body() ingredientDto: CreateIngredientDto): void {
        this.ingredientenService.createIngredient(ingredientDto);
    }
}
