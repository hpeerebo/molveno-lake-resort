import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiOperation, ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { ActiviteitPlanning } from 'src/models/activiteit-planning';
import { ActiviteitPlanningService } from 'src/services/activiteit-planning/activiteit-planning.service';
import { CreateActiviteitPlanningDto } from 'src/dto/create-activiteit-planning-dto';
import { ActiviteitPlanningEntity } from 'src/entities/activiteit-planning-entity';

@Controller('activiteiten/planning')
@ApiUseTags('activiteiten')
export class ActiviteitenPlanningController {
  constructor(
    private readonly activiteitenPlanService: ActiviteitPlanningService,
  ) {}

  @Post()
  @ApiOperation({ title: 'Maak een nieuw plannings element aan' })
  @ApiResponse({
    status: 201,
    description: 'De planning is succesvol aangemaakt',
  })
  @ApiResponse({
    status: 409,
    description: 'Een planning met dit kenmerk bestaat al',
  })
  @Param(':activiteitid')
  public saveActiviteitPlanning(
    @Body() createActiviteitPlanning: CreateActiviteitPlanningDto,
    @Param('activiteitid') activiteitid: number,
  ) {
    const activiteitplanning: ActiviteitPlanningEntity = new ActiviteitPlanningEntity(
      createActiviteitPlanning.planid,
      // createActiviteitPlanning.actid,
      createActiviteitPlanning.actdate,
      createActiviteitPlanning.actprijs,
      createActiviteitPlanning.actcapaciteit,
    );

    return this.activiteitenPlanService.saveActiviteitPlanning(
      activiteitplanning,
      activiteitid,
    );
  }

  @Get('')
  @ApiOperation({ title: 'Maak een lijst van geplande activiteiten' })
  getActiviteitenPlanning(): Promise<ActiviteitPlanning[]> {
    return this.activiteitenPlanService.getActiviteitenPlanning();
  }

  @Put('')
  @ApiOperation({ title: 'Wijzig een geplande activiteit' })
  @ApiResponse({
    status: 201,
    description: 'De geplande activiteit is succesvol bijgewerkt',
  })
  updateActiviteitenPlanning(
    @Body() createActiviteitPlanning: CreateActiviteitPlanningDto,
    @Param('activiteitid') activiteitid: number,
  ): void {
    const planning: ActiviteitPlanningEntity = new ActiviteitPlanningEntity(
      createActiviteitPlanning.planid,
      // createActiviteitPlanning.actid,
      createActiviteitPlanning.actdate,
      createActiviteitPlanning.actprijs,
      createActiviteitPlanning.actcapaciteit,
    );
    this.activiteitenPlanService.updateActiviteitPlanning(
      planning,
      activiteitid,
    );
  }

  @Delete(':planningsId')
  @ApiOperation({ title: 'Verwijder een geplande activiteit' })
  public deleteActiviteitenPlanning(
    @Param('planningsId') planningsId: number,
  ): void {
    this.activiteitenPlanService.deleteActiviteitenPlanning(planningsId);
  }
}
