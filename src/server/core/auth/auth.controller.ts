import { Controller, Get, Post, Req, Render, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from './guard/local'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './guard/jwt'
import { Request } from 'express'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req: Request) {
    return this.authService.login(req.user)
  }

  @Get('login')
  @Render('Auth')
  async loginPage() {
    return {}
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req: Request) {
    return req.user
  }
}
