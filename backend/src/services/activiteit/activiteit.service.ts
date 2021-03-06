import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiviteitEntity } from 'src/entities/activiteit-entity';
import { Repository } from 'typeorm';
import { CreateActiviteitDto } from 'src/dto/create-activiteit-dto';

@Injectable()
export class ActiviteitService {
  constructor(
    @InjectRepository(ActiviteitEntity)
    private readonly activiteitRepository: Repository<ActiviteitEntity>,
  ) {}
  public insert(activiteit: ActiviteitEntity): Promise<ActiviteitEntity> {
    return this.activiteitRepository.save(activiteit);
  }

  public saveActiviteit(activiteit: ActiviteitEntity): void {
    this.activiteitRepository.save([activiteit]);
  }

  public updateActiviteit(activiteit: ActiviteitEntity): void {
    this.activiteitRepository.update(
      { actid: activiteit.actid },
      {
        actid: activiteit.actid,
        naam: activiteit.naam,
        beschrijving: activiteit.beschrijving,
        thumb: activiteit.thumb,
      },
    );
  }

  async getActiviteit(): Promise<ActiviteitEntity[]> {
    return this.activiteitRepository.find();
  }

  public deleteActiviteit(activiteitId: number) {
    this.activiteitRepository.delete({ actid: activiteitId });
  }
}
