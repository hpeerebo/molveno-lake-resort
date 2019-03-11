import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
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
import { DeleteResult, UpdateResult } from 'typeorm';

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

    @Put('tafels/:id')
    @ApiOperation({ title: 'Wijzig de gegevens van een tafel' })
    @ApiResponse({ status: 200, description: 'De tafel is bijgewerkt' })
    @ApiResponse({ status: 404, description: 'Een tafel met dit id is niet gevonden' })
    @ApiResponse({ status: 409, description: 'Een tafel met dit kenmerk bestaat al' })
    modifyTafel(@Param('id') id: number, @Body() tafelDto: CreateTafelDto): Promise<UpdateResult> {
        return this.tafelService.updateTafel(id, tafelDto.mapToTafelEntity());
    }

    @Delete('tafels/:id')
    @ApiOperation({ title: 'Verwijder een tafel' })
    @ApiResponse({ status: 200, description: 'De tafel is verwijderd' })
    @ApiResponse({ status: 404, description: 'Een tafel met dit id is niet gevonden' })
    deleteTafel(@Param('id') id: number): Promise<DeleteResult> {
        return this.tafelService.deleteTafel(id);
    }

    @Get('gerechten')
    @ApiOperation({ title: 'Haal een lijst op van alle gerechten' })
    async getGerechten(): Promise<{ gerechten: Gerecht[] }> {
        const gerechten = await this.gerechtService.getGerechten();
        return { gerechten };
    }

    @Post('gerechten')
    @ApiOperation({ title: 'Voeg een nieuw gerecht toe' })
    @ApiResponse({ status: 201, description: 'Het gerecht is succesvol aangemaakt' })
    @ApiResponse({ status: 409, description: 'Een gerecht met deze naam bestaat al' })
    async createGerecht(@Body() gerechtDto: CreateGerechtDto): Promise<Gerecht> {
        const gerechtEntity = await this.gerechtService.createGerecht(gerechtDto.mapToGerechtEntity());
        return gerechtEntity.mapToGerecht();
    }

    @Put('gerechten/:id')
    @ApiOperation({ title: 'Wijzig de gegevens van een gerecht' })
    @ApiResponse({ status: 200, description: 'Het gerecht is bijgewerkt' })
    @ApiResponse({ status: 404, description: 'Een gerecht met dit id is niet gevonden' })
    @ApiResponse({ status: 409, description: 'Een gerecht met deze naam bestaat al' })
    modifyGerecht(@Param('id') id: number, @Body() gerechtDto: CreateGerechtDto): Promise<UpdateResult> {
        return this.gerechtService.updateGerecht(id, gerechtDto.mapToGerechtEntity());
    }

    @Delete('gerechten/:id')
    @ApiOperation({ title: 'Verwijder een gerecht' })
    @ApiResponse({ status: 200, description: 'Het gerecht is verwijderd' })
    @ApiResponse({ status: 404, description: 'Een gerecht met dit id is niet gevonden' })
    deleteGerecht(@Param('id') id: number): Promise<DeleteResult> {
        return this.gerechtService.deleteGerecht(id);
    }

    @Get('ingredienten')
    @ApiOperation({ title: 'Haal een lijst op van alle ingredienten' })
    async getIngredienten(): Promise<{ ingredienten: Ingredient[] }> {
        const ingredienten = await this.ingredientenService.getIngredienten();
        return { ingredienten };
    }

    @Post('ingredienten')
    @ApiOperation({ title: 'Voeg een nieuw ingredient toe' })
    @ApiResponse({ status: 201, description: 'Het ingredient is succesvol aangemaakt' })
    @ApiResponse({ status: 409, description: 'Een ingredient met deze naam bestaat al' })
    async createIngredient(@Body() ingredientDto: CreateIngredientDto): Promise<Ingredient> {
        const ingredientEntity = await this.ingredientenService.createIngredient(ingredientDto.mapToIngredientEntity());
        return ingredientEntity.mapToIngredient();
    }

    @Put('ingredienten/:id')
    @ApiOperation({ title: 'Wijzig de gegevens van een ingredient' })
    @ApiResponse({ status: 200, description: 'Het ingredient is bijgewerkt' })
    @ApiResponse({ status: 404, description: 'Een ingredient met dit id is niet gevonden' })
    @ApiResponse({ status: 409, description: 'Een ingredient met deze naam bestaat al' })
    modifyIngredient(@Param('id') id: number, @Body() ingredientDto: CreateIngredientDto): Promise<UpdateResult> {
        return this.ingredientenService.updateIngredient(id, ingredientDto.mapToIngredientEntity());
    }

    @Delete('ingredienten/:id')
    @ApiOperation({ title: 'Verwijder een ingredient' })
    @ApiResponse({ status: 200, description: 'Het ingredient is verwijderd' })
    @ApiResponse({ status: 404, description: 'Een ingredient met dit id is niet gevonden' })
    deleteIngredient(@Param('id') id: number): Promise<DeleteResult> {
        return this.ingredientenService.deleteIngredient(id);
    }

    @Get('reserveringen')
    @ApiOperation({ title: 'Haal een lijst op van alle reserveringen' })
    async getReserveringen(): Promise<{ reserveringen: Tafelreservering[] }> {
        const reserveringen = await this.tafelreserveringService.getReserveringen();
        return { reserveringen };
    }

    @Post('reserveringen')
    @ApiOperation({ title: 'Voeg een nieuwe reservering toe' })
    @ApiResponse({ status: 201, description: 'De reservering is succesvol aangemaakt' })
    async createReservering(@Body() tafelreserveringDto: CreateTafelreserveringDto): Promise<Tafelreservering> {
        const reserveringEntity = await this.tafelreserveringService.createReservering(tafelreserveringDto.mapToTafelreserveringEntity());
        return reserveringEntity.mapToTafelreservering();
    }

    @Put('reserveringen/:id')
    @ApiOperation({ title: 'Wijzig de gegevens van een reservering' })
    @ApiResponse({ status: 200, description: 'De reservering is bijgewerkt' })
    @ApiResponse({ status: 404, description: 'Een reservering met dit id is niet gevonden' })
    modifyReservering(@Param('id') id: number, @Body() tafelreserveringDto: CreateTafelreserveringDto): Promise<UpdateResult> {
        return this.tafelreserveringService.updateReservering(id, tafelreserveringDto.mapToTafelreserveringEntity());
    }

    @Delete('reserveringen/:id')
    @ApiOperation({ title: 'Verwijder een reservering' })
    @ApiResponse({ status: 200, description: 'De reservering is verwijderd' })
    @ApiResponse({ status: 404, description: 'Een reservering met dit id is niet gevonden' })
    deleteReservering(@Param('id') id: number): Promise<DeleteResult> {
        return this.tafelreserveringService.deleteReservering(id);
    }
}
