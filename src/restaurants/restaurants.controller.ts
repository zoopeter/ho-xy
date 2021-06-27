import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {

  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Restaurant[]> {
    return this.restaurantsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantsService.findOneById(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createRestaurant(@Body() body: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantsService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateRestaurant(@Param('id') id: string, @Body() body: UpdateRestaurantDto): Promise<Restaurant> {
    return this.restaurantsService.update(Number(id), body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteRestaurant(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantsService.delete(Number(id));
  }
}
