import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiviteitEntity } from 'src/entities/activiteit-entity';
import { Repository, Any } from 'typeorm';
import { CreateActiviteitDto } from 'src/dto/create-activiteit-dto';

@Injectable()
export class ActiviteitService {
  constructor(
    @InjectRepository(ActiviteitEntity)
    private readonly activiteitRepository: Repository<ActiviteitEntity>,
  ) {}
  public insert(activiteit: CreateActiviteitDto): Promise<ActiviteitEntity> {
    console.log('dit is de insert');
    return this.activiteitRepository.save(activiteit);
  }

  public saveActiviteit(activiteit: ActiviteitEntity): void {
    console.log('dit is de saveActiviteit');
    this.activiteitRepository.save([activiteit]);
  }

  public updateActiviteit(activiteit: CreateActiviteitDto): void {
    console.log('dit is de updateActiviteit');
    this.activiteitRepository.update(
      { id: activiteit.id },
      {
        naam: activiteit.naam,
        beschrijving: activiteit.beschrijving,
        capaciteit: activiteit.capaciteit,
        datum: activiteit.datum,
        prijs: activiteit.prijs,
        thumb: activiteit.thumb,
      },
    );
  }

  async getActiviteit(): Promise<ActiviteitEntity[]> {
    console.log('dit is de get');
    return this.activiteitRepository.find();
  }

  public deleteActiviteit(activiteitId: number) {
    console.log('dit is de delete');
    this.activiteitRepository.delete({ id: activiteitId });
  }
}
