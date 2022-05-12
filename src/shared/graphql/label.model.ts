import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Label {
  @Field({ nullable: false })
  id: string

  @Field(() => Int, { nullable: false })
  ehr: string

  @Field(() => Int, { nullable: false })
  condition: string

  @Field(() => Int, { nullable: false })
  doctor: string

  constructor(id: string, doctor: string, ehr: string, condition: string) {
    this.condition = condition
    this.doctor = doctor
    this.ehr = ehr
    this.id = id
  }
}
