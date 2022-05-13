import { Controller, Get, Render } from '@nestjs/common'
import { EHRsService } from './bss/ehr/ehr.service'

@Controller()
export class AppController {
  constructor(private ehrService: EHRsService) {}
  @Get()
  @Render('index')
  async home() {
    const record = await this.ehrService.findOneWithoutLabel()
    if (record) return { id: record.id, description: record.description }
    return {}
  }
}
