import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActiviteitenController } from './controllers/activiteiten/activiteiten.controller';
import { KamersController } from './controllers/kamers/kamers.controller';
import { RestaurantController } from './controllers/restaurant/restaurant.controller';
import { ActiviteitService } from './services/activiteit/activiteit.service';
import { KamerService } from './services/kamer/kamer.service';
import { TafelService } from './services/tafel/tafel.service';
import { IngredientService } from './services/ingredient/ingredient.service';
import { GerechtService } from './services/gerecht/gerecht.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TafelRepoEntity } from './entities/tafel.entity';
import { ActiviteitEntity } from './entities/activiteit-entity';
import { ActiviteitenResController } from './controllers/activiteiten-res/activiteiten-res.controller';
import { ActiviteitResService } from './services/activiteit-res/activiteit-res.service';
import { ActiviteitResEntity } from './entities/activiteit-res-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'molveno',
      entities: [__dirname + '/**/*-entity{.ts,.js}', __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TafelRepoEntity, ActiviteitEntity, ActiviteitResEntity]),
  ],
  controllers: [
    AppController,
    ActiviteitenController,
    ActiviteitenResController,
    KamersController,
    RestaurantController,
  ],
  providers: [
    AppService,
    ActiviteitService,
    ActiviteitResService,
    KamerService,
    TafelService,
    IngredientService,
    GerechtService,
  ],
})
export class AppModule {}
