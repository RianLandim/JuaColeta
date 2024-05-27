import { Billing } from '@app/entities/billing';

export abstract class BillingRepository {
  abstract create(billing: Billing): Promise<void>;
  abstract get(companyId: string): Promise<Billing[]>;
}
