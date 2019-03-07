import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActiviteitenController } from './controllers/activiteiten/activiteiten.controller';
import { RestaurantController } from './controllers/restaurant/restaurant.controller';
import { ActiviteitService } from './services/activiteit/activiteit.service';
import { TafelService } from './services/tafel/tafel.service';
import { IngredientService } from './services/ingredient/ingredient.service';
import { GerechtService } from './services/gerecht/gerecht.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KamersModule } from './Kamers/modules/kamers.module';
import { TafelRepoEntity } from './entities/tafel.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'molveno',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TafelRepoEntity]),
  ],
  controllers: [
    AppController,
    ActiviteitenController,
    KamersController,
    RestaurantController,
  ],
  providers: [
    AppService,
    ActiviteitService,
    KamerService,
    TafelService,
    IngredientService,
    GerechtService,
  ],
})
export class AppModule {}
