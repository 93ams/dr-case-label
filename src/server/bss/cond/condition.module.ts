import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Condition, ConditionSchema } from './condition.schema'
import { ConditionsService } from './condition.service'
import { ConditionsResolver } from './condition.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Condition.name, schema: ConditionSchema },
    ]),
  ],
  providers: [ConditionsService, ConditionsResolver],
})
export class ConditionModule {}
