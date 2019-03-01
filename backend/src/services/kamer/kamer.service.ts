import { Injectable } from '@nestjs/common';
import { Kamer } from 'src/models/kamer';
import { CreateKamerDto } from 'src/dto/create-kamer-dto';
import { KamerEntity } from 'src/models/entities/kamer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class KamerService {
    constructor(@InjectRepository(KamerEntity) private readonly kamersepository: Repository<KamerEntity>,) {}

    public getKamers(): Promise<Kamer[]>{
        return this.kamersepository.find()
        .then(kamersEntities => kamersEntities.map(kamerEntity => new Kamer(kamerEntity.kamerNummer, kamerEntity.kamerType, 
            kamerEntity.kamerLigging, kamerEntity.aantalPersonen, kamerEntity.prijs)));
    }
    public saveCreateMovieDTO(createkamerdto: CreateKamerDto) {
        this.kamersepository.save(createkamerdto.kamerEntity());
     }
    
    /* public storage: Kamer[] = [
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
     */
}

