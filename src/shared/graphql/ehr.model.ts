import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class EHR {
  @Field()
  id: string

  @Field(() => [String])
  labels: string[]

  @Field({ nullable: false })
  description: string

  constructor(id: string, description: string, labels: string[]) {
    this.description = description
    this.labels = labels
    this.id = id
  }
}
