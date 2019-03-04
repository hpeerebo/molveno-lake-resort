import { Controller, Get, Post, Body } from '@nestjs/common';
import { KamerReservering } from '../models/kamerReservering';
import { CreateKamerreserveringDto } from '../dto/create-kamerreservering-dto';
import { KamerreserveringService } from '../services/kamerreservering.service';

@Controller('kamerreservering')
export class KamerreserveringController {
    constructor(private readonly kamerreserveringservice : KamerreserveringService){}

    @Get('')
    public getKamers(): Promise<KamerReservering[]> {
      return this.kamerreserveringservice.getKamers();
    } 
    @Post('')
  public saveKamer(@Body() CreateKamerreserveringDto: CreateKamerreserveringDto): void {
   this.kamerreserveringservice.saveCreateKamerReserveringDTO(CreateKamerreserveringDto);
  }    
}
