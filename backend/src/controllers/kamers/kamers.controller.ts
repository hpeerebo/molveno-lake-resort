import { Controller, Get, Post, Body } from '@nestjs/common';
import { KamerService } from 'src/services/kamer/kamer.service';
import { Kamer } from 'src/models/kamer';
import { CreateKamerDto } from 'src/dto/create-kamer-dto';

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

  /* @Get('kamers')
  public getKamers(): Kamer[] {
    return this.kamerService.getKamers();
  }
  @Post('kamers')
  public saveKamer(@Body() room: CreateKamerDto): void {
    console.log('room ' + room);
    this.kamerService.saveKamer(room);
  } */
}
