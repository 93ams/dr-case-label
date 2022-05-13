import { Module } from '@nestjs/common'
import { EHRsService } from './ehr.service'
import { MongooseModule } from '@nestjs/mongoose'
import { EHR, EHRSchema } from './ehr.schema'
import { EHRsResolver } from './ehr.resolver'

@Module({
  imports: [MongooseModule.forFeature([{ name: EHR.name, schema: EHRSchema }])],
  providers: [EHRsService, EHRsResolver],
  exports: [EHRsService],
})
export class EHRModule {}
