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
    return this.conditionModel
      .find()
      .then((conditions) => conditions?.map(mapCondition))
  }

  async findOneById(id: string) {
    return this.conditionModel
      .findById(id)
      .then((condition) => (condition ? mapCondition(condition) : condition))
  }
}

const mapCondition = ({ id, code, description }: ConditionDocument) => ({
  id,
  code,
  description,
})
