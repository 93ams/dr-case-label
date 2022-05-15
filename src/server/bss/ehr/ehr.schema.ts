import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type EHRDocument = EHR & Document

@Schema()
export class EHR {
  @Prop({ required: true })
  description: string
  @Prop()
  labeledBy?: string
  @Prop()
  label?: string
  @Prop()
  ttl?: number
  constructor(description: string) {
    this.description = description
  }
}

export const EHRSchema = SchemaFactory.createForClass(EHR)
EHRSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  },
})