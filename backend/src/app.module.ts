import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActiviteitenController } from './controllers/activiteiten/activiteiten.controller';
import { KamersController } from './Kamers/controllers/kamers.controller';
import { KamerService } from './Kamers/services/kamer.service';
import { RestaurantController } from './controllers/restaurant/restaurant.controller';
import { ActiviteitService } from './services/activiteit/activiteit.service';
import { TafelService } from './services/tafel/tafel.service';
import { IngredientService } from './services/ingredient/ingredient.service';
import { GerechtService } from './services/gerecht/gerecht.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KamersModule } from './Kamers/modules/kamers.module';
import { TafelRepoEntity } from './entities/tafel.entity';
import { GerechtRepoEntity } from './entities/gerecht.entity';
import { IngredientRepoEntity } from './entities/ingredient.entity';
import { TafelreserveringService } from './services/tafelreservering/tafelreservering.service';
import { TafelreserveringRepoEntity } from './entities/tafelreservering.entity';
import { ActiviteitEntity } from './entities/activiteit-entity';
import { ActiviteitenResController } from './controllers/activiteiten-res/activiteiten-res.controller';
import { ActiviteitResService } from './services/activiteit-res/activiteit-res.service';
import { ActiviteitResEntity } from './entities/activiteit-res-entity';
import { ActiviteitPlanningEntity } from './entities/activiteit-planning-entity';
import { ActiviteitenPlanningController } from './controllers/activiteiten-planning/activiteiten-planning.controller';
import { ActiviteitPlanningService } from './services/activiteit-planning/activiteit-planning.service';

@Module({
  imports: [
    KamersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'molveno',
      entities: [
        __dirname + '/**/*-entity{.ts,.js}',
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      TafelRepoEntity,
      GerechtRepoEntity,
      IngredientRepoEntity,
      TafelreserveringRepoEntity,
      ActiviteitEntity,
      ActiviteitResEntity,
      ActiviteitPlanningEntity,
    ]),
  ],
  controllers: [
    AppController,
    ActiviteitenController,
    ActiviteitenResController,
    ActiviteitenPlanningController,
    KamersController,
    RestaurantController,
  ],
  providers: [
    AppService,
    ActiviteitService,
    ActiviteitResService,
    ActiviteitPlanningService,
    KamerService,
    TafelService,
    IngredientService,
    GerechtService,
    TafelreserveringService,
  ],
})
export class AppModule {}
