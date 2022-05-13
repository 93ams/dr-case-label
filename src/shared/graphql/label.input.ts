import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class LabelInput {
  @Field({ nullable: true })
  ehr?: string

  @Field({ nullable: true })
  label?: string

  constructor(ehr?: string, label?: string) {
    this.label = label
    this.ehr = ehr
  }
}
