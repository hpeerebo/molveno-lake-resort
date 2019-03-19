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
  ) {}
  public insertReservering(
    reservering: CreateActiviteitResDto,
  ): Promise<ActiviteitResEntity> {
    return this.activiteitResRepository.save(reservering);
  }

  public saveReservering(reservering: ActiviteitResEntity): void {
    this.activiteitResRepository.save([reservering]);
  }
  async getReservering(): Promise<ActiviteitResEntity[]> {
    return this.activiteitResRepository.find();
  }

  public updateReservering(reservering: CreateActiviteitResDto): void {
    this.activiteitResRepository.update(
      { resid: reservering.resid },
      {
        planid: reservering.planid,
        emailGast: reservering.emailGast,
        aantalPersonen: reservering.aantalPersonen,
      },
    );
  }

  public deleteReservering(reserveringId: number) {
    this.activiteitResRepository.delete({ resid: reserveringId });
  }
}
