import { Injectable } from '@nestjs/common';
import { Tafel } from 'src/models/tafel';
import { CreateTafelDto } from 'src/dto/create-tafel-dto';

@Injectable()
export class TafelService {
    private tafels: Tafel[] = [];

    getTafels(): Tafel[] {
        return this.tafels;
    }

    createTafel(body: CreateTafelDto): void {
        this.tafels = [...this.tafels, new Tafel(body.nummer, body.personen)];
    }
}
