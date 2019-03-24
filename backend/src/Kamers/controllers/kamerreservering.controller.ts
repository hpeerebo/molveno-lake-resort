import {Controller, Get, Post, Body, Delete, Param, Put} from '@nestjs/common';
import { KamerReservering } from '../models/kamerReservering';
import { CreateKamerreserveringDto } from '../dto/create-kamerreservering-dto';
import { KamerreserveringService } from '../services/kamerreservering.service';
import {ApiUseTags, ApiOperation, ApiResponse} from '@nestjs/swagger';
import {Tafelreservering} from "../../models/tafelreservering";
import {CreateKamerDto} from "../dto/create-kamer-dto";
import {UpdateKamerreserveringDto} from "../dto/update-kamerreservering-dto";

@ApiUseTags('kamerreservering')
@Controller('kamerreservering')
export class KamerreserveringController {
    constructor(private readonly kamerreserveringservice : KamerreserveringService){}

    @Get('')
    @ApiOperation({ title: 'Laat alle gemaakte kamerreseveringen zien' })
    async getKamerReserveringen(): Promise<{ kamerreserveringen: KamerReservering[] }>  {
        const kamerreserveringen = await this.kamerreserveringservice.getKamerReserveringen();
        return  { kamerreserveringen };
    }

    @Get('id/:reserveringsnummer')
    @ApiOperation({ title: 'Laat geselecteerder resevering zien' })
    async getKamerReserveringenById(@Param('reserveringsnummer') reserveringsnummer: string): Promise<{kamerreserveringen: KamerReservering[] }> {
        const kamerreserveringen = await this.kamerreserveringservice.getKamerReserveringenById(reserveringsnummer);
        return { kamerreserveringen };
    }

    @Get('actief/:datum')
    @ApiOperation({ title: 'Laat actieve kamerreseveringen zien' })
    async getKamerToekomstReserveringen(@Param('datum') datum: string): Promise<{kamerreserveringen: KamerReservering[] }>  {
        const kamerreserveringen = await this.kamerreserveringservice.getKamerToekomstReserveringen(datum);
        return  { kamerreserveringen };
    }

    @Get('inactief/:datum')
    @ApiOperation({ title: 'Laat histories kamerreseveringen zien' })
    async getKamerVerledenReserveringen(@Param('datum') datum: string): Promise<{kamerreserveringen:KamerReservering [] }>  {
        const kamerreserveringen = await this.kamerreserveringservice.getKamerVerledenReserveringen(datum);
        return  { kamerreserveringen };
    }

    @Post('')
    @ApiOperation({ title: 'Maak een nieuwe kamerresevering aan' })
    @ApiResponse({ status: 201, description: 'De kamerresevering is succesvol aangemaakt' })
    @ApiResponse({ status: 409, description: 'Een kamerresevering met dit kenmerk bestaat al' })
    public saveKamerReservering(@Body() createKamerreserveringDto: CreateKamerreserveringDto): void {
        this.kamerreserveringservice.saveCreateKamerReserveringDTO(createKamerreserveringDto);
    }

    @Put('/kamerresevering')
    @ApiOperation({ title: 'Bijwerken van een resevering' })
    @ApiResponse({ status: 201, description: 'De resevering is succesvol bijgewerkt' })
    public updateResevering(@Body() updateKamerreserveringDto: UpdateKamerreserveringDto): void {
        this.kamerreserveringservice.updateResevering(updateKamerreserveringDto);
    }

    @Delete(':id')
    @ApiOperation({ title: 'Verwijder een kamer' })
    @ApiResponse({ status: 201, description: 'De kamer is succesvol verwijderd' })
    public deleteKamer(@Param('id') kamerId: number): void {
        this.kamerreserveringservice.deleteKamerReservering(kamerId);
    }


}
