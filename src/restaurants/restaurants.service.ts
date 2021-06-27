import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(@InjectRepository(Restaurant) private restaurantRepository: Repository<Restaurant>) {

  }

  findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  async findOneById(id: number): Promise<Restaurant> {
    try {
      const restaurant = await this.restaurantRepository.findOneOrFail(id);

      return restaurant;
    } catch (err) {
      throw err;
    }
  }

  create(body: CreateRestaurantDto): Promise<Restaurant> {
    const newRestaurant = this.restaurantRepository.create({ ...body });

    return this.restaurantRepository.save(newRestaurant);
  }

  async update(id: number, body: UpdateRestaurantDto): Promise<Restaurant> {
    const restaurant = await this.findOneById(id);
    const withUpdatedData = Object.assign({}, restaurant, body);

    return this.restaurantRepository.save(withUpdatedData);
  }

  async delete(id: number): Promise<Restaurant> {
    const restaurant = await this.findOneById(id);

    return this.restaurantRepository.remove(restaurant);
  }
}
