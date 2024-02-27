import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { LoginDTO } from '../dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Login } from '@app/usecases/auth/login';
import { UserViewModel } from '../view-model/user.view-model';
import { Response } from 'express';

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
      email: user.email,
    });

    response.cookie('token', token, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    return UserViewModel.toHttp(user);
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.cookie('token', '', {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() - 1000 * 60 * 60 * 24),
    });

    return { message: 'success' };
  }
}
