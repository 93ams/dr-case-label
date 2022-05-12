import { Injectable } from '@nestjs/common'
import { User, UserDocument } from './user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findOneByUsername(username: string) {
    return this.userModel.findOne({ username: username.toLowerCase() }).exec()
  }

  create(username: string, password: string) {
    return this.userModel.create({ username, password })
  }
}
