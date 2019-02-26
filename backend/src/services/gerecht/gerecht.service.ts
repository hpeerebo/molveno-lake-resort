import { Injectable } from '@nestjs/common';
import { Gerecht } from 'src/models/gerecht';
import { CreateGerechtDto } from 'src/dto/create-gerecht-dto';

@Injectable()
export class GerechtService {
    private gerechten: Gerecht[] = [];

    getGerechten(): Gerecht[] {
        return this.gerechten;
    }

    createGerecht(body: CreateGerechtDto): void {
        this.gerechten = [...this.gerechten, new Gerecht(body.naam, body.type, body.subtype, body.prijs)];
    }
}
