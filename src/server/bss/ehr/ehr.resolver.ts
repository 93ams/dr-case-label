import { Condition } from '../../../shared/graphql/condition.model'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { LabelInput } from '../../../shared/graphql/label.input'
import { EHR } from '../../../shared/graphql/ehr.model'
import { EHRsService } from './ehr.service'

@Resolver(() => EHR)
export class EHRsResolver {
  constructor(private ehrsService: EHRsService) {}

  @Query(() => EHR)
  async nextRecord() {
    return this.ehrsService.findOneWithoutLabel()
  }

  @Mutation(() => EHR, { nullable: true })
  async labelRecord(@Args('in') { ehr, label }: LabelInput) {
    if (ehr && label) {
      await this.ehrsService.labelRecord(ehr, label)
    }
    return this.ehrsService.findOneWithoutLabel()
  }
}
