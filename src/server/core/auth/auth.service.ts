import { UsersService } from '../users/users.service'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    let user
    try {
      user = await this.usersService.findOneByUsername(username)
    } catch (e) {
      console.log('missing user', e)
    }
    if (!user) {
      try {
        user = await this.usersService.create(username, pass)
      } catch (e) {
        console.log('failed to create user', e)
      }
    }
    if (user && user.checkPassword(pass)) {
      const { username, _id: id } = user
      return { username, id }
    }
    return null
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
    }
  }
}
