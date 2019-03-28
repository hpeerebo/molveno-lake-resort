import { Injectable } from '@nestjs/common';
import { KamerReserveringEntity } from '../models/entities/kamerReserving.entity';
import {getRepository, Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { KamerReservering } from '../models/kamerReservering';
import { CreateKamerreserveringDto } from '../dto/create-kamerreservering-dto';
import {UpdateKamerreserveringDto} from "../dto/update-kamerreservering-dto";

@Injectable()
export class KamerreserveringService {
    constructor(@InjectRepository(KamerReserveringEntity) private readonly kamerreserveringepository: Repository<KamerReserveringEntity>,){}

    public getKamerReserveringen(): Promise<KamerReservering[]>{
        return this.kamerreserveringepository.find()
            .then(kamerreserveringEntities => kamerreserveringEntities.map(kamerreserveringEntities => kamerreserveringEntities.mapToKamersReserving()));
    }

    public async getKamerReserveringenById(reserveringsnummer: string): Promise<KamerReservering[]>{
        return this.kamerreserveringepository.find({where: {reserveringsnummer: reserveringsnummer}})
            .then(kamerreserveringEntities => kamerreserveringEntities.map(kamerreserveringEntities => kamerreserveringEntities.mapToKamersReserving()));
    }

    public async getKamerToekomstReserveringen(datum: string): Promise<KamerReservering[]>{
        return await getRepository(KamerReserveringEntity)
            .createQueryBuilder("kamerreservering")
            .where(`kamerreservering.datumtot >= '${datum}'`)
            .getMany()
            .then(kamerreserveringEntities => kamerreserveringEntities.map(kamerreserveringEntities => kamerreserveringEntities.mapToKamersReserving()));
    }

    public async getKamerVerledenReserveringen(datum : string): Promise<KamerReservering[]>{
        return await getRepository(KamerReserveringEntity)
            .createQueryBuilder("kamerreservering")
            .where(`kamerreservering.datumtot <= '${datum}'`)
            .getMany()
            .then(kamerreserveringEntities => kamerreserveringEntities.map(kamerreserveringEntities => kamerreserveringEntities.mapToKamersReserving()));
    }

    public saveCreateKamerReserveringDTO(kamerreservering: CreateKamerreserveringDto) {
        this.kamerreserveringepository.save(kamerreservering.kamerReserveringEntity());
    }

    public updateResevering(updateKamerreserveringDto: UpdateKamerreserveringDto) {
        this.kamerreserveringepository.update({id: updateKamerreserveringDto.id}, { voornaam: updateKamerreserveringDto.voornaam,
            achternaam: updateKamerreserveringDto.achternaam,
            telefoonnummer: updateKamerreserveringDto.telefoonnummer,
            emailadres: updateKamerreserveringDto.emailadres,
            identiteitsid: updateKamerreserveringDto.identiteitsid,
            postcode: updateKamerreserveringDto.postcode,
            straat: updateKamerreserveringDto.straat,
            huisnummer: updateKamerreserveringDto.huisnummer,
            woonplaats: updateKamerreserveringDto.woonplaats,
            land: updateKamerreserveringDto.land,
            datumvan: updateKamerreserveringDto.datumvan,
            datumtot: updateKamerreserveringDto.datumtot,
            kamernaam: updateKamerreserveringDto.kamernaam,
            inchecken: updateKamerreserveringDto.inchecken,
            uitchecken: updateKamerreserveringDto.uitchecken,
            personen: updateKamerreserveringDto.personen,
            prijs: updateKamerreserveringDto.prijs,
            reserveringsnummer: updateKamerreserveringDto.reserveringsnummer,
            korting: updateKamerreserveringDto.korting,
        });
    }

    public deleteKamerReservering(kamerid: number){
        this.kamerreserveringepository.delete({id: kamerid});
    }
    
}

