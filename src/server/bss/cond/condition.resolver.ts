import { ConditionsService } from './condition.service'
import { Condition } from './condition.model'
import { Args, Int, Query, Resolver } from '@nestjs/graphql'

@Resolver(() => Condition)
export class ConditionsResolver {
  constructor(private conditionsService: ConditionsService) {}

  @Query(() => [Condition])
  async conditions() {
    const ret = await this.conditionsService.list()
    console.log(ret)
    return ret
  }
  @Query(() => Condition)
  async condition(@Args('id') id: string) {
    return this.conditionsService.findOneById(id)
  }
}
