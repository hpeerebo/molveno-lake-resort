import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Gerecht } from 'src/models/gerecht';
import { CreateGerechtDto } from 'src/dto/create-gerecht-dto';
import { GerechtRepoEntity } from 'src/entities/gerecht.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult, Not } from 'typeorm';

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

    async updateGerecht(id: number, gerechtEntity: GerechtRepoEntity): Promise<UpdateResult> {
        const gerechtExists = !!(await this.gerechtRepository.findOne({ id }));
        if (!gerechtExists) throw new HttpException('Er bestaat geen gerecht met dit id', HttpStatus.NOT_FOUND);

        const naamExists = !!(await this.gerechtRepository.findOne({ id: Not(id), naam: gerechtEntity.naam }));
        if (naamExists) throw new HttpException('Een gerecht met deze naam bestaat al', HttpStatus.CONFLICT);

        return this.gerechtRepository.update({ id }, gerechtEntity);
    }

    async deleteGerecht(id: number): Promise<DeleteResult> {
        const gerechtExists = !!(await this.gerechtRepository.findOne({ id }));
        if (!gerechtExists) throw new HttpException('Er bestaat geen gerecht met dit id', HttpStatus.NOT_FOUND);

        return this.gerechtRepository.delete({ id });
    }
}
