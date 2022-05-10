import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Condition {
  @Field((type) => Int)
  id: number

  @Field({ nullable: false })
  code: string

  @Field({ nullable: false })
  description: string

  constructor(id: number, code: string, description: string) {
    this.description = description
    this.code = code
    this.id = id
  }
}
