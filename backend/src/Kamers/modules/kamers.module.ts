import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KamerService } from 'src/Kamers/services/kamer.service';
import { KamersController } from 'src/Kamers/controllers/kamers.controller';
import { KamerEntity } from '../models/entities/kamer.entity';
import { KamerreserveringService } from '../services/kamerreservering.service';
import { KamerreserveringController } from '../controllers/kamerreservering.controller';
import { KamerReserveringEntity } from '../models/entities/kamerReserving.entity';


@Module({
    imports: [TypeOrmModule.forFeature([KamerEntity]), TypeOrmModule.forFeature([KamerReserveringEntity])],
    providers: [KamerService, KamerreserveringService],
    controllers: [KamersController, KamerreserveringController],
  })
export class KamersModule {}
