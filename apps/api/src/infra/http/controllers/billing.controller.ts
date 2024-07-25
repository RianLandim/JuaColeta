import { Body, Controller, Post } from '@nestjs/common';
import { AddBilling } from '@app/usecases/billing/add-billing.usecase';
import { AddBillingDTO } from '../dtos/billing/add-billing.dto';
@Controller('billing')
export class BillingController {
  constructor(private addBilling: AddBilling) {}

  @Post()
  async createSignature(@Body() body: AddBillingDTO) {
    const checkoutSession = await this.addBilling.execute(body);

    return { url: checkoutSession.url };
  }
}
