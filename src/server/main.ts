import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {NODE_ENV, PORT} from "./app.constants"

declare const module: any

async function bootstrap() {
  console.log(`Env: ${NODE_ENV}`)
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT)
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
  console.log(`running @ http://localhost:${PORT}`)
}

bootstrap()
