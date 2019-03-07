import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TafelreserveringRepoEntity } from 'src/entities/tafelreservering.entity';
import { Repository } from 'typeorm';
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

    async deleteReservering(tafelreserveringEntity: TafelreserveringRepoEntity): Promise<TafelreserveringRepoEntity> {
        return this.tafelreserveringRepository.delete()
    }
}
