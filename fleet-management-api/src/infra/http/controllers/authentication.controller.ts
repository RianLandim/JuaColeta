import {
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
import { JwtAuthGuard } from 'src/infra/authentication/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Login } from '@app/usecases/auth/login';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private jwtService: JwtService,
    private loginUsecase: Login,
  ) {}

  @Post('login')
  async login(
    @Body() data: Required<LoginDTO>,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.loginUsecase.execute(data);

    const token = this.jwtService.sign({
      name: user.name,
      sub: user.id,
    });

    response.cookie('token', token, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  me(@Request() request) {
    return request.user;
  }
}
