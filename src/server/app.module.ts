import { AppController } from './app.controller'
import { CoreModule } from './core/core.module'
import { BssModule } from './bss/bss.module'
import { Module } from '@nestjs/common'

@Module({
  controllers: [AppController],
  imports: [CoreModule, BssModule],
})
export class AppModule {}
