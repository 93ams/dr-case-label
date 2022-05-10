import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Label {
  @Field(() => Int, { nullable: false })
  id: number

  @Field(() => Int, { nullable: false })
  ehr: number

  @Field(() => Int, { nullable: false })
  condition: number

  @Field(() => Int, { nullable: false })
  doctor: number

  constructor(id: number, doctor: number, ehr: number, condition: number) {
    this.condition = condition
    this.doctor = doctor
    this.ehr = ehr
    this.id = id
  }
}
