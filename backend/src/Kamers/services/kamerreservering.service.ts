import { Injectable } from '@nestjs/common';
import { KamerReserveringEntity } from '../models/entities/kamerReserving.entity';
import {getRepository, Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { KamerReservering } from '../models/kamerReservering';
import { CreateKamerreserveringDto } from '../dto/create-kamerreservering-dto';
import {Tafelreservering} from "../../../../frontend/src/app/models/tafelreservering";

@Injectable()
export class KamerreserveringService {
    constructor(@InjectRepository(KamerReserveringEntity) private readonly kamerreserveringepository: Repository<KamerReserveringEntity>,){}

    public getKamerReserveringen(): Promise<KamerReservering[]>{
        return this.kamerreserveringepository.find()
            .then(kamerreserveringEntities => kamerreserveringEntities.map(kamerreserveringEntities => kamerreserveringEntities.mapToKamersReserving()));
    }

    public async getKamerReserveringenById(id: number): Promise<KamerReservering[]>{
        return this.kamerreserveringepository.find({where: {id: id}})
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
        console.log('kamerreservering: '+ kamerreservering);
        this.kamerreserveringepository.save(kamerreservering.kamerReserveringEntity());
    }
    public deleteKamerReservering(kamerid: number){
        this.kamerreserveringepository.delete({id: kamerid});
    }
    
}

