import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    return (
      this.appService.getHello() +
      ' ' +
      process.env.VERCEL_URL +
      ' ' +
      process.env.BOT_DOMAIN +
      ' ' +
      req.headers.host
    );
  }
}
