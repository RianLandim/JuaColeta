import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor() {}

  @Get('set-cookie')
  getHello(@Res({ passthrough: true }) res: Response) {
    console.log('aqui');

    res.cookie('token', 'JWT TOKEN HERE', { httpOnly: true });

    return 'Cookie setted';
  }

  @Get('get-cookie')
  getCookie(@Req() request: Request) {
    if ('token' in request.cookies) {
      return `Cookie ${request.cookies['token']}`;
    }

    return `No cookie found`;
  }
}
