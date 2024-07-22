import { Billing } from '@app/entities/billing';
import { Prisma } from '@prisma/client';

export class PrismaBillingMapper {
  static toPrisma(billing: Billing): Prisma.BillingCreateInput {
    return {
      id: billing.id,
      company: {
        connect: {
          id: billing.companyId,
        },
      },
      dueIn: billing.dueIn,
      status: billing.status,
    };
  }
}
