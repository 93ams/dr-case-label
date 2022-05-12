import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class EHR {
  @Field()
  id: string

  @Field()
  owner: string

  @Field({ nullable: false })
  description: string

  constructor(id: string, owner: string, description: string) {
    this.description = description
    this.owner = owner
    this.id = id
  }
}
