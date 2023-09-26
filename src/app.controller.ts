import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('send')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  sendMail(@Param('id') id: string) {
    return this.appService.sendMail(+id);
  }
}
