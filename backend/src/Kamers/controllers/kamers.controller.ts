import { Controller, Get, Post, Body, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { KamerService } from 'src/Kamers/services/kamer.service';
import { CreateKamerDto } from 'src/Kamers/dto/create-kamer-dto';
import { Kamer } from '../models/kamer';
import {ApiUseTags, ApiOperation, ApiResponse} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { KamerEntity } from '../models/entities/kamer.entity';

@ApiUseTags('kamers')
@Controller('kamers')
export class KamersController {
  constructor(private kamerService: KamerService) {}

  @Get('')
  @ApiOperation({ title: 'laat alle kamers zien' })
  public getKamers(): Promise<Kamer[]> {
    return this.kamerService.getKamers();
  }
  
  @Get('/search/:capacity')
  @ApiOperation({ title: 'laat alle kamers zien van een bepaalde capaciteit'})
  public getKamersOfCapacity(@Param('capacity') capacity: number): Promise<Kamer[]> {
    return this.kamerService.getKamersOfCapacity(capacity);
  }

  @Get('/search/capacity/:capacity/:datumvan/:datumtot')
  @ApiOperation({ title: 'Zoek vrije kamers van capaciteit' })
    public searchFreeRoomsOfCapacity(@Param('capacity') capacity: number, @Param('datumvan') datumVan: string, @Param('datumtot') datumTot: string): Promise<Kamer[]> {
    return this.kamerService.searchFreeRoomsOfCapacity(datumVan, datumTot, capacity);
  }
  
  @Get('/search/:kamertype/:datumvan/:datumtot')
  @ApiOperation({ title: 'Zoek vrije kamers' })
  //public searchFreeRooms(@Param('kamertype') kamerType: string): Promise<Kamer[]> {
    public searchFreeRooms(@Param('kamertype') kamerType: string, @Param('datumvan') datumVan: string, @Param('datumtot') datumTot: string): Promise<Kamer[]> {
      return this.kamerService.searchFreeRooms(datumVan, datumTot,kamerType);
  }

  @Post('')
  @ApiOperation({ title: 'Maak een nieuwe kamer aan' })
  @ApiResponse({ status: 201, description: 'De kamer is succesvol aangemaakt' })
  @ApiResponse({ status: 409, description: 'Een kamer met dit kenmerk bestaat al' })
  public saveKamer(@Body() createkamerdto: CreateKamerDto): void {
    this.kamerService.saveKamer(createkamerdto);
  } 

  @Put('/kamernaam')
  @ApiOperation({ title: 'Bijwerken van een kamer' })
  @ApiResponse({ status: 201, description: 'De kamer is succesvol bijgewerkt' })
  public updateKamer(@Body() createkamerdto: CreateKamerDto): void {
    this.kamerService.updateKamer(createkamerdto);
  } 

  @Delete('/:kamernaam')
  @ApiOperation({ title: 'Verwijder een kamer' })
  @ApiResponse({ status: 201, description: 'De kamer is succesvol verwijderd' })
  public deleteKamer(@Param('kamernaam') kamerNaam: string): void {
   this.kamerService.deleteKamer(kamerNaam);
  } 
}
