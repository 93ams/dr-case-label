import { AppController } from './app.controller'
import { CoreModule } from './core/core.module'
import { BssModule } from './bss/bss.module'
import { AppService } from './app.service'
import { Module } from '@nestjs/common'

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CoreModule, BssModule],
})
export class AppModule {}
