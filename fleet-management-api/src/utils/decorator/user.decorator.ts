import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export type UserProps = { id: string; name: string; email: string };

export const User = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UserProps => {
    const req = ctx.switchToHttp().getRequest();

    return req.user;
  },
);
