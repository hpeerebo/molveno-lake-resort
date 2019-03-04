import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KamerService } from 'src/Kamers/services/kamer.service';
import { KamersController } from 'src/Kamers/controllers/kamers.controller';
import { KamerEntity } from '../models/entities/kamer.entity';


@Module({
    imports: [TypeOrmModule.forFeature([KamerEntity])],
    providers: [KamerService],
    controllers: [KamersController],
  })
export class KamersModule {}
