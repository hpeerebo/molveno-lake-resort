import { Injectable } from '@nestjs/common';
import { Gerecht } from 'src/models/gerecht';
import { CreateGerechtDto } from 'src/dto/create-gerecht-dto';
import { GerechtRepoEntity } from 'src/entities/gerecht.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GerechtService {
    
    constructor(
        @InjectRepository(GerechtRepoEntity)
        private readonly gerechtRepository: Repository<GerechtRepoEntity>,
    ) { }

    async getGerechten(): Promise<Gerecht[]> {
        const gerechtenEntities = await this.gerechtRepository.find();
        const gerechten = gerechtenEntities.map(gerechtEntity => gerechtEntity.mapToGerecht());
        return gerechten;
    }

    createGerecht(gerechtDto: CreateGerechtDto): void {
        this.gerechtRepository.save(gerechtDto.mapToGerechtEntity());
    }
}
