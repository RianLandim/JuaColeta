import { Body, Controller, Post, Res } from '@nestjs/common';
import { AddBilling } from '@app/usecases/billing/add-billing.usecase';
import { AddBillingDTO } from '../dtos/billing/add-billing.dto';
import { Response } from 'express';
@Controller('billing')
export class BillingController {
  constructor(private addBilling: AddBilling) {}

  @Post()
  async createSignature(@Body() body: AddBillingDTO, @Res() res: Response) {
    const checkoutSession = await this.addBilling.execute(body);

    res.redirect(checkoutSession.url);
  }
}
