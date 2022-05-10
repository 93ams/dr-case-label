import { Module } from '@nestjs/common'
import { EHRModule } from './ehr/ehr.module'
import { LabelModule } from './ehr/label/label.module'
import { ConditionModule } from './cond/condition.module'

@Module({
  imports: [ConditionModule, EHRModule, LabelModule],
})
export class BssModule {}
