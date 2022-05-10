import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ContextIdFactory, ModuleRef } from '@nestjs/core'
import { AuthService } from '../auth.service'

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(private moduleRef: ModuleRef) {
    super({ passReqToCallback: true })
  }

  async validate(request: Request, username: string, password: string) {
    const contextId = ContextIdFactory.getByRequest(request)
    const authService = await this.moduleRef.resolve(AuthService, contextId)
    return authService.validateUser(username, password)
  }
}
