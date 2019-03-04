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

@Module({
  imports: [TypeOrmModule.forRoot(), KamersModule ],
  controllers: [AppController, ActiviteitenController, RestaurantController],
  providers: [AppService, ActiviteitService, TafelService, IngredientService, GerechtService],
})
export class AppModule {}
