import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Activiteit } from 'src/models/activiteit';
import { ActiviteitEntity } from 'src/entities/activiteit-entity';
import { ActiciteitPlanningService } from 'src/services/activiteit/activiteit.service';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateActiviteitPlanningDto } from 'src/dto/create-activiteit-planning-dto';

@Controller('activiteiten-planning')
export class ActiviteitenPlanningController {}

@ApiUseTags('activiteiten')
@Controller('activiteiten')
export class ActiviteitenController {
  constructor(
    private readonly activiteitenService: ActiciteitPlanningService,
  ) {}

  @Post('')
  @ApiOperation({ title: 'Plan een nieuwe activiteit' })
  @ApiResponse({
    status: 201,
    description: 'De activiteit is succesvol gepland',
  })
  @ApiResponse({
    status: 409,
    description: 'Een planning met dit kenmerk bestaat al',
  })
  public saveActiviteit(
    @Body() createActiviteit: CreateActiviteitPlanningDto,
  ): void {
    // const activiteit: ActiviteitEntity = new ActiviteitEntity(
    //     createActiviteit.id,
    //     createActiviteit.naam,
    //     createActiviteit.beschrijving,
    //     createActiviteit.capaciteit,
    //     createActiviteit.datum,
    //     createActiviteit.prijs,
    //     createActiviteit.thumb,
    // );
    // return this.activiteitenService.saveActiviteit(activiteit);
  }

  @Get('')
  @ApiOperation({ title: 'Maak een lijst van activiteiten' })
  getActiviteit(): Promise<Activiteit[]> {
    return this.activiteitenService.getActiviteit();
  }

  @Put('')
  @ApiOperation({ title: 'Bijwerken van een activiteit' })
  @ApiResponse({
    status: 201,
    description: 'De activiteit is succesvol bijgewerkt',
  })
  public updateActiviteit(
    @Body() createActiviteit: CreateActiviteitPlannignDto,
  ): void {
    const activiteit: ActiviteitEntity = new ActiviteitEntity(
      createActiviteit.id,
      createActiviteit.naam,
      createActiviteit.beschrijving,
      createActiviteit.capaciteit,
      createActiviteit.datum,
      createActiviteit.prijs,
      createActiviteit.thumb,
    );
    this.activiteitenService.updateActiviteit(activiteit);
  }

  @Delete('/:activiteitId')
  public deleteActiviteit(@Param('activiteitId') activiteitId: number): void {
    this.activiteitenService.deleteActiviteit(activiteitId);
  }
}
