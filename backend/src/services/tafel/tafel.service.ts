import { Injectable } from '@nestjs/common';
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

    async createTafel(tafelDto: CreateTafelDto): Promise<{ message: string }> {
        const existingTables = await this.tafelRepository.find({ where: { kenmerk: tafelDto.kenmerk } });
        if (existingTables.length === 0) {
            this.tafelRepository.save(tafelDto.mapToTafelEntity());
            return {
                message: 'ok',
            };
        } else {
            return {
                message: 'kenmerk bestaat al',
            };
        }
    }
}
