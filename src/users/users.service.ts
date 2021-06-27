import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {

  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail(id);

      return user;
    } catch (err) {
      throw err;
    }
  }

  findOneByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username }});
  }

  create(body: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create({ ...body });

    return this.userRepository.save(newUser);
  }

  async update(id: number, body: UpdateUserDto): Promise<User> {
    const user = await this.findOneById(id);
    const withUpdatedData = Object.assign({}, user, body);

    return this.userRepository.save(withUpdatedData);
  }

  async delete(id: number): Promise<User> {
    const user = await this.findOneById(id);

    return this.userRepository.remove(user);
  }
}
