import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return (
      this.appService.getHello() +
      ' ' +
      process.env.VERCEL_URL +
      +' ' +
      process.env.VERCEL_BRANCH_URL +
      ' ' +
      this.configService.get<string>('bot.domain')
    );
  }
}
