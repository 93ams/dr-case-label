import { Module } from '@nestjs/common'
import { ConditionModule } from './cond/condition.module'

@Module({
  imports: [ConditionModule],
})
export class BssModule {}
