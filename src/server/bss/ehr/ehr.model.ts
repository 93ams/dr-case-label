import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class EHR {
  @Field((type) => Int)
  id: number

  @Field((type) => Int)
  owner: number

  @Field({ nullable: false })
  description: string

  constructor(id: number, owner: number, description: string) {
    this.description = description
    this.owner = owner
    this.id = id
  }
}
