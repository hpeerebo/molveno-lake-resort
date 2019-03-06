import { Controller, Get, Post, Body } from '@nestjs/common';
import { KamerReservering } from '../models/kamerReservering';
import { CreateKamerreserveringDto } from '../dto/create-kamerreservering-dto';
import { KamerreserveringService } from '../services/kamerreservering.service';
import {ApiUseTags, ApiOperation, ApiResponse} from '@nestjs/swagger';

@ApiUseTags('kamerreservering')
@Controller('kamerreservering')
export class KamerreserveringController {
    constructor(private readonly kamerreserveringservice : KamerreserveringService){}

    @Get('')
    @ApiOperation({ title: 'Laat alle gemaakte kamerreseveringen zien' })
    public getKamerReserveringen(): Promise<KamerReservering[]> {
        return this.kamerreserveringservice.getKamerReserveringen();
    } 
    @Post('')
    @ApiOperation({ title: 'Maak een nieuwe kamerresevering aan' })
    @ApiResponse({ status: 201, description: 'De kamerresevering is succesvol aangemaakt' })
    @ApiResponse({ status: 409, description: 'Een kamerresevering met dit kenmerk bestaat al' })
    public saveKamerReservering(@Body() createKamerreserveringDto: CreateKamerreserveringDto): void {
        this.kamerreserveringservice.saveCreateKamerReserveringDTO(createKamerreserveringDto);
  }    
}
