import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Role } from '../auth/enum/role'
import { Document } from 'mongoose'
import * as bcrypt from 'bcrypt'

export type UserDocument = User &
  Document & { checkPassword: (pass: string) => boolean }

@Schema()
export class User {
  @Prop({ required: true })
  username: string
  @Prop({ required: true })
  password: string
  @Prop({ required: true })
  roles?: Role[]

  constructor(username: string, password: string, roles?: Role[]) {
    this.username = username
    this.password = password
    this.roles = roles
  }

  get isAdmin(): boolean {
    return this.roles?.includes(Role.Admin) || false
  }
}

export const UserSchema = SchemaFactory.createForClass(User)
UserSchema.methods.checkPassword = function (
  password: string,
): Promise<boolean> {
  const user = this
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (error, isMatch) =>
      error ? reject(error) : resolve(isMatch),
    )
  })
}

UserSchema.pre<UserDocument>('save', function (next) {
  const user = this
  user.username = user.username.toLowerCase()
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(10, (genSaltError, salt) => {
    if (genSaltError) next(genSaltError)
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})
