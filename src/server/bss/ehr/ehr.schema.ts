import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type EHRDocument = EHR & Document

@Schema()
export class EHR {
  @Prop({ required: true })
  description: string
  @Prop()
  label: string
  @Prop()
  updatedAt?: Date
  constructor(description: string, label: string, updatedAt?: Date) {
    this.description = description
    this.updatedAt = updatedAt
    this.label = label
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
EHRSchema.pre<EHRDocument>( 'save', function(next) {
  this.updatedAt = new Date()
  next()
})
