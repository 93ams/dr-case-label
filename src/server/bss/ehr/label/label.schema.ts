import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type LabelDocument = Label & Document

@Schema()
export class Label {
  @Prop({ required: true })
  ehr: string

  @Prop({ required: true })
  doctor: string

  @Prop({ required: true })
  condition: string

  constructor(ehr: string, condition: string, doctor: string) {
    this.condition = condition
    this.doctor = doctor
    this.ehr = ehr
  }
}

export const LabelSchema = SchemaFactory.createForClass(Label)
LabelSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  },
})
