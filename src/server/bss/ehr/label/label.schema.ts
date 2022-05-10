import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type LabelDocument = Label & Document

@Schema()
export class Label {
  @Prop({ required: true })
  ehr: number

  @Prop({ required: true })
  doctor: number

  @Prop({ required: true })
  condition: number

  constructor(ehr: number, condition: number, doctor: number) {
    this.condition = condition
    this.doctor = doctor
    this.ehr = ehr
  }
}

export const LabelSchema = SchemaFactory.createForClass(Label)
