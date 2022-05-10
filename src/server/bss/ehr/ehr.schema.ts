import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'

export type EHRDocument = EHR & Document

@Schema()
export class EHR {
  @Prop({ required: true })
  description: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  owner: number

  constructor(owner: number, description: string) {
    this.description = description
    this.owner = owner
  }
}

export const EHRSchema = SchemaFactory.createForClass(EHR)
