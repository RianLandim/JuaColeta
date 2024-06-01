import { Dependencies, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '@prisma/client';
import { Roles } from '@utils/decorator/role.decorator';
import { UserProps } from '@utils/decorator/user.decorator';

@Injectable()
@Dependencies(Reflector)
export class RolesGuard {
  constructor(private reflector: Reflector) {}

  private matchRoles(roles: UserRole[], userRole: UserRole) {
    return roles.some((role) => role === userRole);
  }

  canActivate(context: ExecutionContext) {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user as UserProps;
    return this.matchRoles(roles, user.role);
  }
}
