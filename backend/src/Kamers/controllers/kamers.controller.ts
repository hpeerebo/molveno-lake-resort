import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { KamerService } from 'src/Kamers/services/kamer.service';
import { CreateKamerDto } from 'src/Kamers/dto/create-kamer-dto';
import { Kamer } from '../models/kamer';

@Controller()
export class KamersController {
  constructor(private kamerService: KamerService) {}

  @Get('kamers')
  public getKamers(): Promise<Kamer[]> {
    return this.kamerService.getKamers();
  }
  @Post('kamers')
  public saveKamer(@Body() createkamerdto: CreateKamerDto): void {
    this.kamerService.saveCreateMovieDTO(createkamerdto);
  } 
  @Put('kamers/kamernaam')
  public updateKamer(@Body() createkamerdto: CreateKamerDto): void {
    this.kamerService.updateCreateMovieDTO(createkamerdto);
  } 
  @Delete('kamers/:kamernaam')
  public deleteKamer(@Body() createkamerdto: CreateKamerDto): void {
   // this.kamerService.deleteKamer(createkamerdto.kamerNaam);
  } 
}
