import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

import { History } from './entities/history.entity';
import { HistoriesController } from './histories.controller';
import { HistoriesService } from './histories.service';

@Module({
  controllers: [HistoriesController],
  imports: [TypeOrmModule.forFeature([History]), UsersModule],
  providers: [HistoriesService]
})
export class HistoriesModule {}
