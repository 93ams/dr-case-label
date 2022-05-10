import { Injectable } from '@nestjs/common'
import { User, UserDocument } from './user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOneByUsername(username: string): Promise<UserDocument | undefined> {
    const user = await this.userModel
      .findOne({ username: username.toLowerCase() })
      .exec()
    if (user) return user
    return undefined
  }
}
