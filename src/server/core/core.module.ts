import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module'
import { GraphQLModule } from '@nestjs/graphql'
import { RenderModule } from 'nest-next'
import { Module } from '@nestjs/common'
import { cwd } from '../app.constants'
import { join } from 'path'
import Next from 'next'

@Module({
  imports: [
    UsersModule,
    AuthModule,
    RenderModule.forRootAsync(Next({ dir: join(cwd, '../..') }), {
      viewsDir: null,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/shared/graphql/schema.gql'),
    }),
  ],
})
export class CoreModule {}
