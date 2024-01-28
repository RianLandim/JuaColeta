import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from '@infra/database/prisma/prisma.service';

type PayloadProps = {
  sub: string;
  name: string;
  email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: PayloadProps) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário não autorizado');
    }

    return { id: user.id, name: user.name, email: user.email };
  }

  private static extractJWT(req: Request) {
    console.log(req.cookies['token']);

    if (req.cookies && 'token' in req.cookies) {
      console.log(req.cookies['token']);
      return req.cookies['token'];
    }

    return null;
  }
}
