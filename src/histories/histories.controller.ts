import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { History } from './entities/history.entity';
import { HistoriesService } from './histories.service';

@Controller('histories')
export class HistoriesController {
  constructor(private historiesService: HistoriesService, private usersService: UsersService) {

  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req): Promise<History[]> {
    return this.historiesService.findAllByUserId(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createHistory(@Request() req, @Body() body: CreateHistoryDto): Promise<History> {
    const user = await this.usersService.findOneById(req.user.id);

    return this.historiesService.create(user, body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateHistory(@Request() req, @Param('id') id: string, @Body() body: UpdateHistoryDto): Promise<History> {
    const user = await this.usersService.findOneById(req.user.id);

    return this.historiesService.update(Number(id), user, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteHistory(@Request() req, @Param('id') id: string): Promise<History> {
    const user = await this.usersService.findOneById(req.user.id);

    return this.historiesService.delete(Number(id), user);
  }
}
