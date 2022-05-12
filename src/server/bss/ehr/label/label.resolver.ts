import { Label } from '../../../../shared/graphql/label.model'
import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { LabelsService } from './label.service'

@Resolver(() => Label)
export class LabelsResolver {
  constructor(private LabelsService: LabelsService) {}
}
