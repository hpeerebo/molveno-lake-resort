import { Injectable } from '@nestjs/common';
import { Kamer } from 'src/models/kamer';

@Injectable()
export class KamerService {
    public storage: Kamer[] = [
        new Kamer(1, 'Budget', 'Zeezicht', 8, 50, 'free'),
        new Kamer(2, 'Standaard', 'Zeezicht', 5, 75, 'free'),
        new Kamer(3, 'Lux', 'Bergzicht', 3, 65, 'free'),
      ];

    public getKamers(): Kamer[] {
        return this.storage;
    }

    public saveKamer(room: Kamer){
        this.storage = [...this.storage, room];
    }

}

