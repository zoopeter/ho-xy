import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return 'Hello, World!';
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @Post('signup')
  signup(@Body() body): any {
    return this.authService.signup(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProtectedHello(@Request() req): any {
    return { user: req.user };
  }
}
