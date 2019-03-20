import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TafelreserveringRepoEntity } from 'src/entities/tafelreservering.entity';
import { Repository, DeleteResult, UpdateResult, MoreThanOrEqual, LessThanOrEqual, Between } from 'typeorm';
import { Tafelreservering } from 'src/models/tafelreservering';
import { Tafel } from 'dist/models/tafel';

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

    async check(tijd: Date): Promise<TafelreserveringRepoEntity[]> {
        let x: Date = new Date(tijd);
        let y: Date = new Date(tijd);
        const start = new Date(x.setHours(x.getHours() - 3));
        const stop = new Date(y.setHours(y.getHours() + 3));
        return this.tafelreserveringRepository.find({
            where: {
                aanvangstijd: Between(start, stop)
            }
        });
    }
}

// async check(tijd: Date): Promise<TafelreserveringRepoEntity[]> {
//     return this.tafelreserveringRepository.find({where: {
//         aanvangstijd: MoreThanOrEqual(tijd.setHours(tijd.getHours()-3)),
//         aanvangstijd: LessThanOrEqual(tijd.setHours(tijd.getHours()+3)),
//      }});
// }



// async check(tijd: Date): Promise<TafelreserveringRepoEntity[]> {
//     console.log(new Date(tijd.setHours( tijd.getHours() + 2 )));
//     return this.tafelreserveringRepository.find();
// }