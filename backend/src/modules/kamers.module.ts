import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KamerService } from 'src/services/kamer/kamer.service';
import { KamersController } from 'src/controllers/kamers/kamers.controller';
import { KamerEntity } from 'src/models/entities/kamer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([KamerEntity])],
    providers: [KamerService],
    controllers: [KamersController],
  })
export class KamersModule {}
