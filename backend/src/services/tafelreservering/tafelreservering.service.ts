import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TafelreserveringRepoEntity } from 'src/entities/tafelreservering.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Tafelreservering } from 'src/models/tafelreservering';

@Injectable()
export class TafelreserveringService {
    constructor(
        @InjectRepository(TafelreserveringRepoEntity)
        private readonly tafelreserveringRepository: Repository<TafelreserveringRepoEntity>,
    ) { }

    async getReserveringen(): Promise<Tafelreservering[]> {
        const reserveringEntities = await this.tafelreserveringRepository.find();
        const reserveringen = reserveringEntities.map(reserveringEntity => reserveringEntity.mapToTafelreservering());
        return reserveringen;
    }

    async createReservering(tafelreserveringEntity: TafelreserveringRepoEntity): Promise<TafelreserveringRepoEntity> {
        return this.tafelreserveringRepository.save(tafelreserveringEntity);
    }

    async updateReservering(id: number, tafelreserveringEntity: TafelreserveringRepoEntity): Promise<UpdateResult> {
        const reserveringExists = !!(await this.tafelreserveringRepository.findOne({ id }));
        if (!reserveringExists) throw new HttpException('Er bestaat geen reservering met dit id', HttpStatus.NOT_FOUND);

        return this.tafelreserveringRepository.update({ id }, tafelreserveringEntity);
    }

    async deleteReservering(id: number): Promise<DeleteResult> {
        const reserveringExists = !!(await this.tafelreserveringRepository.findOne({ id }));
        if (!reserveringExists) throw new HttpException('Er bestaat geen reservering met dit id', HttpStatus.NOT_FOUND);

        return this.tafelreserveringRepository.delete({ id });
    }
}
