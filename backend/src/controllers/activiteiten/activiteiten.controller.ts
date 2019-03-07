import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Activiteit } from 'src/models/activiteit';
import { ActiviteitEntity } from 'src/entities/activiteit-entity';
import { CreateActiviteitDto } from 'src/dto/create-activiteit-dto';
import { ActiviteitService } from 'src/services/activiteit/activiteit.service';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { create } from 'domain';

@ApiUseTags('activiteiten')
@Controller('activiteiten')
export class ActiviteitenController {
  constructor(private readonly activiteitenService: ActiviteitService) {}

  @Post('')
  @ApiOperation({ title: 'Maak een nieuwe activiteit aan' })
  @ApiResponse({
    status: 201,
    description: 'De activiteit is succesvol aangemaakt',
  })
  @ApiResponse({
    status: 409,
    description: 'Een activiteit met dit kenmerk bestaat al',
  })
  public saveActiviteit(@Body() createActiviteit: CreateActiviteitDto): void {
    const activiteit: ActiviteitEntity = new ActiviteitEntity(
      createActiviteit.id,
      createActiviteit.naam,
      createActiviteit.beschrijving,
      createActiviteit.capaciteit,
      createActiviteit.datum,
      createActiviteit.prijs,
      createActiviteit.thumb,
    );
    return this.activiteitenService.saveActiviteit(activiteit);
  }

  @Get('')
  @ApiOperation({ title: 'Maak een lijst van activiteiten' })
  getActiviteit(): Promise<Activiteit[]> {
    return this.activiteitenService.getActiviteit();
  }

  @Put('/activiteit')
  @ApiOperation({ title: 'Bijwerken van een activiteit' })
  @ApiResponse({
    status: 201,
    description: 'De activiteit is succesvol bijgewerkt',
  })
  public updateActiviteit(@Body() createActiviteit: CreateActiviteitDto): void {
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
