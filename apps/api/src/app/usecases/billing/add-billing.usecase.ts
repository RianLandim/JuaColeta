import { Billing } from '@app/entities/billing';
import { BillingRepository } from '@app/repositories/billing.repository';
import { CheckoutRepository } from '@infra/checkout/repositories/stripe.repository';
import { Injectable } from '@nestjs/common';
import { BillingStatus } from '@prisma/client';
import { addDays } from 'date-fns';

interface AddBillingRequest {
  dueIn: 30 | 180 | 360;
  status: BillingStatus;
  companyId: string;
  priceId: string;
}

@Injectable()
export class AddBilling {
  constructor(
    private billingRepository: BillingRepository,
    private checkoutRepository: CheckoutRepository,
  ) {}

  async execute(props: AddBillingRequest) {
    const session = this.checkoutRepository.generateCheckoutSession(
      props.priceId,
    );

    const billing = new Billing({
      dueIn: addDays(Date.now(), props.dueIn),
      companyId: props.companyId,
      status: props.status,
    });

    await this.billingRepository.create(billing);

    return session;
  }
}
