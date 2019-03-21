import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { ActiviteitResService } from 'src/services/activiteit-res/activiteit-res.service';
import { CreateActiviteitResDto } from 'src/dto/create-activiteit-res-dto';
import { ActiviteitResEntity } from 'src/entities/activiteit-res-entity';
import { ActiviteitRes } from 'src/models/activiteit-res';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('activiteiten/reserveringen')
@ApiUseTags('activiteiten')
export class ActiviteitenResController {
  constructor(private readonly activiteitenResService: ActiviteitResService) {}

  @Post('')
  @ApiOperation({ title: 'Maak een nieuwe reservering aan' })
  @ApiResponse({
    status: 201,
    description: 'De reservering is succesvol aangemaakt',
  })
  @ApiResponse({
    status: 409,
    description: 'Een reservering met dit kenmerk bestaat al',
  })
  public saveReservering(
    @Body() createReservering: CreateActiviteitResDto,
  ): void {
    const reservering: ActiviteitResEntity = new ActiviteitResEntity(
      createReservering.resid,
      // createReservering.planid,
      createReservering.emailGast,
      createReservering.phoneGast,
      createReservering.aantalPersonen,
    );

    return this.activiteitenResService.saveReservering(reservering);
  }
  @Get('')
  @ApiOperation({ title: 'Maak een lijst van reserveringen' })
  getReservering(): Promise<ActiviteitRes[]> {
    return this.activiteitenResService.getReservering();
  }

  @Put('')
  @ApiOperation({ title: 'Bijwerken van een reservering' })
  @ApiResponse({
    status: 201,
    description: 'De reservering is succesvol bijgewerkt',
  })
  public updateReservering(
    @Body() createResActiviteit: CreateActiviteitResDto,
  ): void {
    const reservering: ActiviteitResEntity = new ActiviteitResEntity(
      createResActiviteit.resid,
      createResActiviteit.planid,
      createResActiviteit.emailGast,
      createResActiviteit.aantalPersonen,
    );
    this.activiteitenResService.updateReservering(reservering);
  }

  @Delete(':reserveringId')
  @ApiOperation({ title: 'Verwijder een bestaande reservering' })
  public deleteReservering(
    @Param('reserveringId') reserveringId: number,
  ): void {
    this.activiteitenResService.deleteReservering(reserveringId);
  }
}
