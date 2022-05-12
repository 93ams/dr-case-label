import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { EHR } from '../../../shared/graphql/ehr.model'
import { EHRsService } from './ehr.service'

@Resolver(() => EHR)
export class EHRsResolver {
  constructor(private ehrsService: EHRsService) {}
}
