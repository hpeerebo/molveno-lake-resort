import { Controller, Post, Body, Get, Delete } from '@nestjs/common';
import { ActiviteitResService } from 'src/services/activiteit-res/activiteit-res.service';
import { CreateActiviteitResDto } from 'src/dto/create-activiteit-res-dto';
import { ActiviteitResEntity } from 'src/entities/activiteit-res-entity';
import { ActiviteitRes } from 'src/models/activiteit-res';

@Controller('activiteiten-res')
export class ActiviteitenResController {

  constructor(
    private readonly activiteitenResService: ActiviteitResService,
  ) {}

  @Post('savereservering')
  public saveReservering(@Body() createReservering: CreateActiviteitResDto): void {
    const reservering: ActiviteitResEntity = new ActiviteitResEntity(
      createReservering.naamActiviteit,
      createReservering.datum,
      createReservering.emailGast,
      createReservering.aantalPersonen,
    );

    return this.activiteitenResService.saveReservering(reservering);
  }
  @Get('')
  getReservering(): Promise<ActiviteitRes[]> {
    return this.activiteitenResService.getReservering();
  }

  @Delete()
  deleteReservering() {
    return this.activiteitenResService.deleteReservering();
  }
}