import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Condition {
  @Field()
  id: string

  @Field({ nullable: true })
  code?: string

  @Field()
  description: string

  constructor(id: string, code: string, description: string) {
    this.description = description
    this.code = code
    this.id = id
  }
}
