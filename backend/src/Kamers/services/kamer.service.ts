import { Injectable } from '@nestjs/common';
import { CreateKamerDto } from 'src/Kamers/dto/create-kamer-dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Kamer } from '../models/kamer';
import { KamerEntity } from '../models/entities/kamer.entity';

@Injectable()
export class KamerService {
    constructor(@InjectRepository(KamerEntity) private readonly kamersepository: Repository<KamerEntity>,) {}

    public getKamers(): Promise<Kamer[]>{
        return this.kamersepository.find()
        .then(kamersEntities => kamersEntities.map(kamerEntity => new Kamer(kamerEntity.kamerNaam, kamerEntity.kamerType, 
            kamerEntity.kamerLigging, kamerEntity.aantalPersonen, kamerEntity.prijs)));
    }
    public saveCreateMovieDTO(createkamerdto: CreateKamerDto) {
        this.kamersepository.save(createkamerdto.kamerEntity());
     }
     public updateCreateMovieDTO(createkamerdto: CreateKamerDto) {
        this.kamersepository.update({kamerNaam: createkamerdto.kamerNaam}, { kamerType: createkamerdto.kamerType, 
            kamerLigging: createkamerdto.kamerLigging, aantalPersonen: createkamerdto.aantalPersonen, prijs: createkamerdto.prijs });
     }
     public deleteKamer(createkamerdto: CreateKamerDto){
         console.log(createkamerdto.kamerNaam);
         this.kamersepository.delete(createkamerdto.kamerNaam);
         //this.kamersepository.query("delete from kamer_entity where KamerNaam = kamer1 ");
     }
}

