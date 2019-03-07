import { Injectable } from '@nestjs/common';
import { KamerReserveringEntity } from '../models/entities/kamerReserving.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { KamerReservering } from '../models/kamerReservering';
import { CreateKamerreserveringDto } from '../dto/create-kamerreservering-dto';

@Injectable()
export class KamerreserveringService {
constructor(@InjectRepository(KamerReserveringEntity) private readonly kamerreserveringepository: Repository<KamerReserveringEntity>,){}
public getKamerReserveringen(): Promise<KamerReservering[]>{
    return this.kamerreserveringepository.find()
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
