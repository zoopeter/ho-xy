import { Body, Controller, ForbiddenException, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";

import { JwtAuthGuard } from "../auth/jwt-auth.guard";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {

  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Request() request, @Param('id') id: string): Promise<User> {
    if (request.user.id !== Number(id)) {
      throw new ForbiddenException();
    }

    return this.usersService.findOneById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateUser(@Request() request, @Param('id') id: string, @Body() body: UpdateUserDto): Promise<User> {
    if (request.user.id !== Number(id)) {
      throw new ForbiddenException();
    }

    return this.usersService.update(Number(id), body);
  }
}
