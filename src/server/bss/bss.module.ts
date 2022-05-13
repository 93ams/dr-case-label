import { Module } from '@nestjs/common'
import { EHRModule } from './ehr/ehr.module'
import { ConditionModule } from './cond/condition.module'

@Module({
  imports: [ConditionModule, EHRModule],
  exports: [EHRModule],
})
export class BssModule {}
