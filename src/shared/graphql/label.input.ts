import {Field, InputType, Int} from '@nestjs/graphql'

@InputType()
export class LabelInput {
  @Field({ nullable: true })
  ehr?: string

  @Field({ nullable: true })
  label?: string

  @Field(() => Int)
  ttl: number = 0
}
