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
  ) { }
  public insert(activiteit: CreateActiviteitDto): Promise<ActiviteitEntity> {
    return this.activiteitRepository.save(activiteit);
  }

  public saveActivitiet(activiteit: ActiviteitEntity): void {
    this.activiteitRepository.save([activiteit]);
  }
  async  getActiviteit(): Promise<ActiviteitEntity[]> {
    return this.activiteitRepository.find();
  }
}
