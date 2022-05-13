import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { EHR, EHRDocument } from './ehr.schema'

@Injectable()
export class EHRsService {
  constructor(@InjectModel(EHR.name) private ehrModel: Model<EHRDocument>) {}

  findOneWithoutLabel() {
    return this.ehrModel.findOne({ label: { $exists: false } })
  }

  labelRecord(id: string, label: string, labeledBy: string) {
    return this.ehrModel.findByIdAndUpdate(id, { label, labeledBy, updatedAt: new Date() })
  }
}
