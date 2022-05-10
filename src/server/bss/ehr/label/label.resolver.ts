import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { LabelsService } from './label.service'
import { Label } from './label.model'

@Resolver(() => Label)
export class LabelsResolver {
  constructor(private LabelsService: LabelsService) {}
}
