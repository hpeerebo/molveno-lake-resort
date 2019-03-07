import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
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
import { Tafelreservering } from 'src/models/tafelreservering';
import { TafelreserveringService } from 'src/services/tafelreservering/tafelreservering.service';
import { CreateTafelreserveringDto } from 'src/dto/create-tafelreservering-dto';
import { DeleteResult } from 'typeorm';

@ApiUseTags('restaurant')
@Controller('restaurant')
export class RestaurantController {

    constructor(
        private tafelService: TafelService,
        private gerechtService: GerechtService,
        private ingredientenService: IngredientService,
        private tafelreserveringService: TafelreserveringService,
    ) { }

    @Get('tafels')
    @ApiOperation({ title: 'Haal een lijst op van alle tafels' })
    async getTafels(): Promise<{ tafels: Tafel[] }> {
        const tafels = await this.tafelService.getTafels();
        return { tafels };
    }

    @Post('tafels')
    @ApiOperation({ title: 'Voeg een nieuwe tafel toe' })
    @ApiResponse({ status: 201, description: 'De tafel is succesvol aangemaakt' })
    @ApiResponse({ status: 409, description: 'Een tafel met dit kenmerk bestaat al' })
    async createTafel(@Body() tafelDto: CreateTafelDto): Promise<Tafel> {
        const tafelEntity = await this.tafelService.createTafel(tafelDto.mapToTafelEntity());
        return tafelEntity.mapToTafel();
    }

    @Get('gerechten')
    async getGerechten(): Promise<{ gerechten: Gerecht[] }> {
        const gerechten = await this.gerechtService.getGerechten();
        return { gerechten };
    }

    @Post('gerechten')
    async createGerecht(@Body() gerechtDto: CreateGerechtDto): Promise<Gerecht> {
        const gerechtEntity = await this.gerechtService.createGerecht(gerechtDto.mapToGerechtEntity());
        return gerechtEntity.mapToGerecht();
    }

    @Get('ingredienten')
    async getIngredienten(): Promise<{ ingredienten: Ingredient[] }> {
        const ingredienten = await this.ingredientenService.getIngredienten();
        return { ingredienten };
    }

    @Post('ingredienten')
    async createIngredient(@Body() ingredientDto: CreateIngredientDto): Promise<Ingredient> {
        const ingredientEntity = await this.ingredientenService.createIngredient(ingredientDto.mapToIngredientEntity());
        return ingredientEntity.mapToIngredient();
    }

    @Get('reserveringen')
    async getReserveringen(): Promise<{ reserveringen: Tafelreservering[] }> {
        const reserveringen = await this.tafelreserveringService.getReserveringen();
        return { reserveringen };
    }

    @Post('reserveringen')
    async createReservering(@Body() tafelreserveringDto: CreateTafelreserveringDto): Promise<Tafelreservering> {
        const reserveringEntity = await this.tafelreserveringService.createReservering(tafelreserveringDto.mapToTafelreserveringEntity());
        return reserveringEntity.mapToTafelreservering();
    }

    @Delete('reserveringen/:id')
    deleteReservering(@Param('id') id: number): Promise<DeleteResult> {
        return this.tafelreserveringService.deleteReservering(id);
    }
}
