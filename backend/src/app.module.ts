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

@Module({
  imports: [],
  controllers: [AppController, ActiviteitenController, KamersController, RestaurantController],
  providers: [AppService, ActiviteitService, KamerService, TafelService, IngredientService, GerechtService],
})
export class AppModule {}
