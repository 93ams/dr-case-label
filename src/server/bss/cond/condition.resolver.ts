import { ConditionsService } from './condition.service'
import { Condition } from './condition.model'
import { Args, Int, Query, Resolver } from '@nestjs/graphql'

@Resolver(() => Condition)
export class ConditionsResolver {
  constructor(private conditionsService: ConditionsService) {}

  @Query(() => Condition)
  async conditions() {
    return this.conditionsService.list()
  }
  @Query((returns) => Condition)
  async condition(@Args('id', { type: () => Int }) id: number) {
    return this.conditionsService.findOneById(id)
  }
}
