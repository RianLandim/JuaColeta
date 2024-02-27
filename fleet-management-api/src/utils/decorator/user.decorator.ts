import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserRole } from '@prisma/client';

export type UserProps = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  companyId?: string;
};

export const User = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UserProps => {
    const req = ctx.switchToHttp().getRequest();

    return req.user;
  },
);
