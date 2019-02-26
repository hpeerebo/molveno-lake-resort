import { Controller, Get, Post, Body } from '@nestjs/common';
import { Tafel } from 'src/models/tafel';
import { TafelService } from 'src/services/tafel/tafel.service';
import { CreateTafelDto } from 'src/dto/create-tafel-dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('restaurant')
@Controller('restaurant')
export class RestaurantController {

    constructor(private tafelService: TafelService) {}

    @Get('tafels')
    getTafels(): Tafel[] {
        return this.tafelService.getTafels();
    }

    @Post('tafels')
    createTafel(@Body() body: CreateTafelDto): void {
        this.tafelService.createTafel(body);
    }
}
