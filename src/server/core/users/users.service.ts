import { Injectable } from '@nestjs/common'
import { User } from './model/user'

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    new User(1, 'john', 'changeme'),
    new User(2, 'maria', 'guess'),
  ]

  async findOne(username: string) {
    return this.users.find((user) => user.username === username)
  }
}
