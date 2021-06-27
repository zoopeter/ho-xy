import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../ormconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Beverage } from './beverage.entity';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Beverage])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
