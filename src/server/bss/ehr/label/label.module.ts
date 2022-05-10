import { Module } from '@nestjs/common'
import { LabelsService } from './label.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Label, LabelSchema } from './label.schema'
import { LabelsResolver } from './label.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Label.name, schema: LabelSchema }]),
  ],
  providers: [LabelsService, LabelsResolver],
})
export class LabelModule {}
