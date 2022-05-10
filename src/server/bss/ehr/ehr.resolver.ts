import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { EHRsService } from './ehr.service'
import { EHR } from './ehr.model'

@Resolver(() => EHR)
export class EHRsResolver {
  constructor(private ehrsService: EHRsService) {}
}
