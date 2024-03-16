import { Billing } from '@app/entities/billing';
import { fakerPT_BR as faker } from '@faker-js/faker';
import { createId } from '@paralleldrive/cuid2';

type Override = Partial<Billing>;

export function makeBilling(override?: Override) {
  return new Billing(
    {
      dueIn: faker.date.future(),
      companyId: createId(),
      status: 'DEMO',
      ...override,
    },
    override?.id,
  );
}
