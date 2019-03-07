import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiviteitResEntity } from 'src/entities/activiteit-res-entity';
import { Repository } from 'typeorm';
import { CreateActiviteitResDto } from 'src/dto/create-activiteit-res-dto';

@Injectable()
export class ActiviteitResService {
    constructor(
      @InjectRepository(ActiviteitResEntity)
      private readonly activiteitResRepository: Repository<ActiviteitResEntity>,
    ) { }
    public insertReservering(reservering: CreateActiviteitResDto): Promise<ActiviteitResEntity> {
      return this.activiteitResRepository.save(reservering);
    }

    public saveReservering(reservering: ActiviteitResEntity): void {
      this.activiteitResRepository.save([reservering]);
    }
    async  getReservering(): Promise<ActiviteitResEntity[]> {
      return this.activiteitResRepository.find();
    }

    public async deleteReservering(): Promise<void> {
      return await this.activiteitResRepository.clear();
    }
  }
