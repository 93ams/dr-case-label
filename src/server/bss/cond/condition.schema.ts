import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ConditionDocument = Condition & Document

@Schema()
export class Condition {
  @Prop({ required: true })
  code: string

  @Prop({ required: true })
  description: string

  constructor(code: string, description: string) {
    this.description = description
    this.code = code
  }
}

export const ConditionSchema = SchemaFactory.createForClass(Condition)

ConditionSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  },
})
