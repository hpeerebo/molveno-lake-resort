import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Tafel } from 'src/models/tafel';
import { CreateTafelDto } from 'src/dto/create-tafel-dto';
import { TafelRepoEntity } from 'src/entities/tafel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult, Not } from 'typeorm';

@Injectable()
export class TafelService {
  constructor(
    @InjectRepository(TafelRepoEntity)
    private readonly tafelRepository: Repository<TafelRepoEntity>,
  ) { }

  async getTafels(): Promise<Tafel[]> {
    const tafelEntities = await this.tafelRepository.find();
    const tafels = tafelEntities.map(tafelEntity => tafelEntity.mapToTafel());
    return tafels;
  }

  async createTafel(tafelEntity: TafelRepoEntity): Promise<TafelRepoEntity> {
    const tafelExists = !!(await this.tafelRepository.findOne({ kenmerk: tafelEntity.kenmerk }));
    if (tafelExists) throw new HttpException('Een tafel met dit kenmerk bestaat al', HttpStatus.CONFLICT);

    return this.tafelRepository.save(tafelEntity);
  }

  async updateTafel(id: number, tafelEntity: TafelRepoEntity): Promise<UpdateResult> {
    const tafelExists = !!(await this.tafelRepository.findOne({ id }));
    if (!tafelExists) throw new HttpException('Er bestaat geen tafel met dit id', HttpStatus.NOT_FOUND);

    const kenmerkExists = !!(await this.tafelRepository.findOne({ id: Not(id), kenmerk: tafelEntity.kenmerk }));
    if (kenmerkExists) throw new HttpException('Een tafel met dit kenmerk bestaat al', HttpStatus.CONFLICT);

    return this.tafelRepository.update({ id }, tafelEntity);
  }

  async deleteTafel(id: number): Promise<DeleteResult> {
    const tafelExists = !!(await this.tafelRepository.findOne({ id }));
    if (!tafelExists) throw new HttpException('Er bestaat geen tafel met dit id', HttpStatus.NOT_FOUND);

    return this.tafelRepository.delete({ id });
  }
}
