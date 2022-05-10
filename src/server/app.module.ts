import { DynamicModule, Module } from '@nestjs/common'
import { NODE_ENV } from 'src/shared/constants/env'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RenderModule } from 'nest-next'
import Next from 'next'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'

declare const module: any

@Module({})
export class AppModule {
  public static initialize(): DynamicModule {
    const renderModule =
      module.hot?.data?.renderModule ??
      RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
        viewsDir: null,
      })

    if (module.hot) {
      module.hot.dispose((data: any) => {
        data.renderModule = renderModule
      })
    }

    return {
      module: AppModule,
      imports: [renderModule, UsersModule, AuthModule],
      controllers: [AppController],
      providers: [AppService],
    }
  }
}
