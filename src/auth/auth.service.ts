import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {

  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      const { password, ...rest } = user;

      return rest;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      user: {
        id: user.id,
        nickname: user.nickname,
        username: user.username
      }
    };

    return {
      accessToken: this.jwtService.sign(payload)
    };
  }
}
