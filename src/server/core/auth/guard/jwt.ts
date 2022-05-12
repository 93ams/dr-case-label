import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(err: Error, user: TUser) {
    if (err || !user) {
      throw err || new UnauthorizedException()
    }
    return user
  }
}
