import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BillingRepository } from '@app/repositories/billing.repository';
import { Billing } from '@app/entities/billing';
import { PrismaBillingMapper } from '../mappers/prisma.billing.mapper';

@Injectable()
export class PrismaBillingRepository implements BillingRepository {
  constructor(private prisma: PrismaService) {}

  async create(billing: Billing): Promise<void> {
    const rawBilling = PrismaBillingMapper.toPrisma(billing);

    await this.prisma.billing.create({
      data: rawBilling,
    });
  }

  async get(companyId: string): Promise<Billing[]> {
    const rawBilling = await this.prisma.billing.findMany({
      where: {
        companyId,
      },
    });

    const billing = rawBilling.map(
      (billing) => new Billing(billing, billing.id),
    );

    return billing;
  }
}
