import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from '@infra/database/prisma/prisma.service';

type PayloadProps = {
  name: string;
  sub: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: 'secret',
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
      },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário não autorizado');
    }

    return { userId: user.id, name: user.name };
  }

  private static extractJWT(req: Request) {
    if (req.cookies && 'token' in req.cookies) {
      return req.cookies['token'];
    }

    return null;
  }
}
