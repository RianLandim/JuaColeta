import { InMemoryBillingRepository } from '@test/repositories/billing.repository';
import { AddBilling } from './add-billing.usecase';
import { createId } from '@paralleldrive/cuid2';

describe('add biling [usecase]', () => {
  const billingRepository = new InMemoryBillingRepository();
  const addBilling = new AddBilling(billingRepository);

  it('should be able to register an billing', () => {
    expect(
      async () =>
        await addBilling.execute({
          companyId: createId(),
          dueIn: 30,
          status: 'DEMO',
        }),
    ).not.toThrow();
  });
});
