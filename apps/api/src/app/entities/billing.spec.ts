import { createId } from '@paralleldrive/cuid2';
import { Billing } from './billing';

describe('Billing entity', () => {
  it('Should be able to create an billing instance', () => {
    const billing = new Billing({
      companyId: createId(),
      dueIn: new Date(),
      status: 'DEMO',
    });

    expect(billing).toBeInstanceOf(Billing);
    expect(billing.status).toEqual('DEMO');
  });
});
