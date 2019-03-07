import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Gerecht } from 'src/models/gerecht';
import { CreateGerechtDto } from 'src/dto/create-gerecht-dto';
import { GerechtRepoEntity } from 'src/entities/gerecht.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

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

    async createGerecht(gerechtEntity: GerechtRepoEntity): Promise<GerechtRepoEntity> {
        const gerechtExists = !!await this.gerechtRepository.findOne({ where: { naam: gerechtEntity.naam } });
        if (!gerechtExists) {
            return this.gerechtRepository.save(gerechtEntity);
        } else {
            throw new HttpException('Een gerecht met deze naam bestaat al', HttpStatus.CONFLICT);
        }
    }

    deleteGerecht(id: number): Promise<DeleteResult> {
        return this.gerechtRepository.delete({id});
    }
}
