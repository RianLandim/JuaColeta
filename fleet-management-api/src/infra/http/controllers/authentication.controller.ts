import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from '../dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Login } from '@app/usecases/auth/login';
import { UserViewModel } from '../view-model/user.view-model';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private jwtService: JwtService,
    private loginUsecase: Login,
  ) {}

  @Post('login')
  async login(@Body() data: Required<LoginDTO>) {
    const user = await this.loginUsecase.execute(data);

    const token = this.jwtService.sign({
      name: user.name,
      sub: user.id,
    });

    return { ...UserViewModel.toHttp(user), accessToken: token };
  }
}
