import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class LabelInput {
  @Field({ nullable: true })
  ehr?: string

  @Field({ nullable: true })
  label?: string

  @Field({ nullable: true })
  ttl?: Date
}
