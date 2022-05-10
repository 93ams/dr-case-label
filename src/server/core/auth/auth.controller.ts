import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Render,
} from '@nestjs/common'
import { LocalAuthGuard } from './guard/local'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './guard/jwt'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user)
  }

  @Get('login')
  @Render('Auth')
  async loginPage(@Request() req: any) {
    return {}
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user
  }
}
