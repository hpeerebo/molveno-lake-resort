import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Tafel } from 'src/models/tafel';
import { CreateTafelDto } from 'src/dto/create-tafel-dto';
import { TafelRepoEntity } from 'src/entities/tafel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TafelService {

    constructor(
        @InjectRepository(TafelRepoEntity)
        private readonly tafelRepository: Repository<TafelRepoEntity>,
    ) { }

    async getTafels(): Promise<Tafel[]> {
        const tafelEntities = await this.tafelRepository.find();
        const tafels = tafelEntities.map(tafelEntity => tafelEntity.mapToTafel());
        return tafels;
    }

    async createTafel(tafelDto: CreateTafelDto): Promise<void> {
        const tafelExists = await this.tafelRepository.find({ where: { kenmerk: tafelDto.kenmerk } });
        if (!tafelExists) {
            this.tafelRepository.save(tafelDto.mapToTafelEntity());
        } else {
            throw new HttpException('Een tafel met dit kenmerk bestaat al', HttpStatus.CONFLICT);
        }
    }
}
