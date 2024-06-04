import { BillingRepository } from '@app/repositories/billing.repository';
import { Injectable } from '@nestjs/common';

interface GetBillingRequestBody {
  companyId: string;
}

@Injectable()
export class GetBilling {
  constructor(private billingRepository: BillingRepository) {}

  async execute(props: GetBillingRequestBody) {
    const billings = await this.billingRepository.get(props.companyId);

    return billings;
  }
}
