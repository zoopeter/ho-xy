import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  nickname: string;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      nickname: 'Pop Marley',
      username: 'mmmarley.pops',
      password: 'superdupersecret'
    },
    {
      id: 2,
      nickname: 'Selena Gomez',
      username: 'selena',
      password: 'superdupersecret'
    }
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
