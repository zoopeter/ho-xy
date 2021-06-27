import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { History } from './entities/history.entity';

@Injectable()
export class HistoriesService {
  constructor(@InjectRepository(History) private historyRepository: Repository<History>) {

  }

  findAllByUserId(userId: number): Promise<History[]> {
    return this.historyRepository.find({
      where: { user: { id: userId } }
    });
  }

  async findOneById(id: number): Promise<History> {
    try {
      const history = await this.historyRepository.findOneOrFail(id, {
        relations: ['user']
      });

      return history;
    } catch (err) {
      throw err;
    }
  }

  create(user: User, body: CreateHistoryDto): Promise<History> {
    const newHistory = this.historyRepository.create({ ...body, user });

    return this.historyRepository.save(newHistory);
  }

  async update(id: number, user: User, body: UpdateHistoryDto): Promise<History> {
    const history = await this.findOneById(id);
    if (history.user.id !== user.id) {
      throw new ForbiddenException();
    }

    const withUpdatedData = Object.assign({}, history, body);

    return this.historyRepository.save(withUpdatedData);
  }

  async delete(id: number, user: User): Promise<History> {
    const history = await this.findOneById(id);

    if (history.user.id !== user.id) {
      throw new ForbiddenException();
    }

    return this.historyRepository.remove(history);
  }
}
