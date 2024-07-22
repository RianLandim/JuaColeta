import { Module } from '@nestjs/common';
import { CheckoutRepository } from './repositories/stripe.repository';
import { StripeService } from './services/stripe.service';

@Module({
  providers: [
    {
      provide: CheckoutRepository,
      useClass: StripeService,
    },
  ],
  exports: [CheckoutRepository],
})
export class CheckoutModule {}
