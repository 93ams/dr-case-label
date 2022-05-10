import { Condition, ConditionDocument } from './condition.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'

@Injectable()
export class ConditionsService {
  constructor(
    @InjectModel(Condition.name)
    private conditionModel: Model<ConditionDocument>,
  ) {}
  async list() {
    return this.conditionModel.find()
  }
  async findOneById(id: number) {
    return this.conditionModel.findById(id)
  }
}
