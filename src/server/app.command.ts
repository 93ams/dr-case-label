import { Command, CommandRunner, Option } from 'nest-commander'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PORT } from '../shared/constants/env'

declare const module: any

interface CommandOptions {
  port?: number
}

@Command({
  name: 'serve',
  options: { isDefault: true },
  description: 'An health record labeler for smart doctors',
})
export class AppCommand implements CommandRunner {
  async run(passedParam: string[], options?: CommandOptions) {
    console.log(passedParam, options)
    const app = await NestFactory.create(AppModule.initialize())
    await app.listen(options?.port || PORT)

    if (module.hot) {
      module.hot.accept()
      module.hot.dispose(() => app.close())
    }
  }

  @Option({
    defaultValue: '3000',
    flags: '-p, --port [number]',
    description: 'Port to run the server at',
  })
  parsePort(val: string): number {
    return Number(val)
  }
}
