import { DynamicModule, Module } from '@nestjs/common'
import { NODE_ENV } from 'src/shared/constants/env'
import { AppController } from './app.controller'
import { CoreModule } from './core/core.module'
import { BssModule } from './bss/bss.module'
import { AppService } from './app.service'
import { RenderModule } from 'nest-next'
import Next from 'next'

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
      providers: [AppService],
      controllers: [AppController],
      imports: [renderModule, CoreModule, BssModule],
    }
  }
}
