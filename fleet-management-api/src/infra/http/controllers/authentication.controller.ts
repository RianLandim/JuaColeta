import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginDTO } from '../dtos/login.dto';
import { JwtAuthGuard } from 'src/authentication/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private jwtService: JwtService) {}

  @Post('login')
  async login(
    @Body() data: LoginDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    if (data.username === 'test@gmail.com' && data.password === 'teste123') {
      const token = this.jwtService.sign({
        username: data.username,
        sub: randomUUID(),
      });

      response.cookie('token', token, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      });
    } else {
      response.clearCookie('token');
      throw new BadRequestException('Usuário ou senha incorretos');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  me(@Request() request) {
    return request.user;
  }
}
