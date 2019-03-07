import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiviteitEntity } from 'src/entities/activiteit-entity';
import { Repository, Any } from 'typeorm';
import { CreateActiviteitDto } from 'src/dto/create-activiteit-dto';
import { isString } from 'util';
import { Activiteit } from 'src/models/activiteit';

@Injectable()
export class ActiviteitService {
  constructor(
    @InjectRepository(ActiviteitEntity)
    private readonly activiteitRepository: Repository<ActiviteitEntity>,
  ) {}
  public insert(activiteit: CreateActiviteitDto): Promise<ActiviteitEntity> {
    return this.activiteitRepository.save(activiteit);
  }

  public saveActiviteit(activiteit: ActiviteitEntity): void {
    this.activiteitRepository.save([activiteit]);
  }

  public updateActiviteit(activiteit: CreateActiviteitDto): void {
    this.activiteitRepository.update(
      { id: activiteit.id },
      {
        beschrijving: activiteit.beschrijving,
        capaciteit: activiteit.capaciteit,
        datum: activiteit.datum,
        prijs: activiteit.prijs,
        thumb: activiteit.thumb,
      },
    );
  }

  async getActiviteit(): Promise<ActiviteitEntity[]> {
    return this.activiteitRepository.find();
  }

  public deleteActiviteit(activiteitId: number) {
    this.activiteitRepository.delete({ id: activiteitId });
  }
}
