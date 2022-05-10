import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { EHR, EHRDocument } from './ehr.schema'

@Injectable()
export class EHRsService {
  constructor(@InjectModel(EHR.name) private catModel: Model<EHRDocument>) {}
}
