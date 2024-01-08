import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export type UserProps = { userId: string; name: string };

export const User = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UserProps => {
    const req = ctx.switchToHttp().getRequest();

    return req.user;
  },
);
