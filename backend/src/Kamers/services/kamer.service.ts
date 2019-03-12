import { Injectable } from '@nestjs/common';
import { CreateKamerDto } from 'src/Kamers/dto/create-kamer-dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Kamer } from '../models/kamer';
import { KamerEntity } from '../models/entities/kamer.entity';
import {UpdateKamerDto} from "../dto/update-kamer-dto";

@Injectable()
export class KamerService {
    constructor(@InjectRepository(KamerEntity) private readonly kamersepository: Repository<KamerEntity>,) {}

    public getKamers(): Promise<Kamer[]>{
        return this.kamersepository.find()
        .then(kamersEntities => kamersEntities.map(kamerEntity => kamerEntity.mapToKamers()));
    }
    public searchFreeRooms(datumvan: string, datumtot: string, kamertype: string){
        console.log (datumvan +'-'+ datumtot +'-' + kamertype)
       // return this.kamersepository.findOne({where: {kamerType: kamertype}})
       // .then(kamerEntity => kamerEntity.mapToKamers());
        
    }
    public saveKamer(createkamerdto: CreateKamerDto) {
        this.kamersepository.save(createkamerdto.kamerEntity());
     }
     public updateKamer(updateKamerDto: UpdateKamerDto) {
        this.kamersepository.update({kamerNaam: updateKamerDto.kamerNaam}, { kamerType: updateKamerDto.kamerType,
            kamerLigging: updateKamerDto.kamerLigging, aantalPersonen: updateKamerDto.aantalPersonen, prijs: updateKamerDto.prijs });
     }
     public deleteKamer(kamernaam: string){
         this.kamersepository.delete({kamerNaam: kamernaam});
     }
}

