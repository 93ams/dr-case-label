import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import {cwd, MONGO_URL, NODE_ENV} from '../app.constants'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module'
import { GraphQLModule } from '@nestjs/graphql'
import { RenderModule } from 'nest-next'
import { Module } from '@nestjs/common'
import { join } from 'path'
import Next from 'next'

@Module({
  imports: [
    UsersModule,
    AuthModule,
    RenderModule.forRootAsync(Next({
      dev: NODE_ENV !== 'production',
      dir: join(cwd, '../..'),
    }), {
      viewsDir: null,
    }),
    MongooseModule.forRoot('mongodb://'+MONGO_URL+'/nest'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/shared/graphql/schema.gql'),
    }),
  ],
})
export class CoreModule {}
