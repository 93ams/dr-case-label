import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module'
import { CaslModule } from './casl/casl.module'
import { GraphQLModule } from '@nestjs/graphql'
import { Module } from '@nestjs/common'
import { RenderModule } from 'nest-next'
import { join } from 'path'
import Next from 'next'

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CaslModule,
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        dir: join(__dirname, '../..'),
      }),
      { passthrough404: true, viewsDir: null },
    ),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/shared/schema.gql'),
    }),
  ],
})
export class CoreModule {}
