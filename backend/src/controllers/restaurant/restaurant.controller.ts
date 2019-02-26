import { Controller, Get, Post, Body } from '@nestjs/common';
import { Tafel } from 'src/models/tafel';
import { TafelService } from 'src/services/tafel/tafel.service';
import { CreateTafelDto } from 'src/dto/create-tafel-dto';
import { ApiUseTags } from '@nestjs/swagger';
import { Gerecht } from 'src/models/gerecht';
import { GerechtService } from 'src/services/gerecht/gerecht.service';
import { CreateGerechtDto } from 'src/dto/create-gerecht-dto';

@ApiUseTags('restaurant')
@Controller('restaurant')
export class RestaurantController {

    constructor(private tafelService: TafelService, private gerechtService: GerechtService) { }

    @Get('tafels')
    getTafels(): Tafel[] {
        return this.tafelService.getTafels();
    }

    @Post('tafels')
    createTafel(@Body() body: CreateTafelDto): void {
        this.tafelService.createTafel(body);
    }

    @Get('gerechten')
    getGerechten(): Gerecht[] {
        return this.gerechtService.getGerechten();
    }

    @Post('gerechten')
    createGerecht(@Body() body: CreateGerechtDto): void {
        this.gerechtService.createGerecht(body);
    }
}
