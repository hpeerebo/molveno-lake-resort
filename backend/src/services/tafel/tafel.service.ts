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

    createTafel(body: CreateTafelDto): void {
        this.tafelRepository.save(body.mapToTafelEntity());
    }
}
