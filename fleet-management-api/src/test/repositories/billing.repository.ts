import { Billing } from '@app/entities/billing';
import { BillingRepository } from '@app/repositories/billing.repository';

export class InMemoryBillingRepository implements BillingRepository {
  billing: Billing[] = [];

  async create(billing: Billing): Promise<void> {
    this.billing.push(billing);
  }

  async get(companyId: string): Promise<Billing[]> {
    const billings = this.billing.filter((c) => c.companyId === companyId);

    if (!billings.length) {
      throw new Error('This company has no billings');
    }

    return billings;
  }
}
