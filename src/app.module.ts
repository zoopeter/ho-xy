import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../ormconfig';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Beverage } from './beverage.entity';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { HistoriesModule } from './histories/histories.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Beverage]), UsersModule, AuthModule, RestaurantsModule, HistoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
