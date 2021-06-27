import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Beverage } from './beverage.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Beverage) private beverageRepository: Repository<Beverage>) {

  }

  findAll(): Promise<Beverage[]> {
    return this.beverageRepository.find();
  }

  async findOneById(id: number): Promise<Beverage> {
    try {
      const beverage = await this.beverageRepository.findOneOrFail(id);

      return beverage;
    } catch (err) {
      throw err;
    }
  }

  create(name: string): Promise<Beverage> {
    const newBeverage = this.beverageRepository.create({ name });

    return this.beverageRepository.save(newBeverage);
  }

  async update(id: number, name: string): Promise<Beverage> {
    const beverage = await this.findOneById(id);

    beverage.name = name;

    return this.beverageRepository.save(beverage);
  }

  async delete(id: number): Promise<Beverage> {
    const beverage = await this.findOneById(id);

    return this.beverageRepository.remove(beverage);
  }

  getHello(): string {
    return 'Hello, World!';
  }
}
