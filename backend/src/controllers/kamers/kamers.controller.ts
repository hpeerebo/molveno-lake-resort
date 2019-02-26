import { Controller, Get, Post, Body } from '@nestjs/common';
import { KamerService } from 'src/services/kamer/kamer.service';
import { Kamer } from 'src/models/kamer';
import { puts } from 'util';

@Controller()
export class KamersController {
constructor(private kamerService: KamerService){}

@Get('kamers')
    public getKamers(): Kamer[]{
        return this.kamerService.getKamers();
    }
@Post()
public saveKamer(@Body() room: Kamer): void {
    this.kamerService.saveKamer(room);
  }
}

