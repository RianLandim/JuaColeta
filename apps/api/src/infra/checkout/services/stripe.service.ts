import { Injectable } from '@nestjs/common';
import { CheckoutRepository } from '../repositories/stripe.repository';
import { Stripe } from 'stripe';
import { ConfigService } from '@nestjs/config';
import { ENV_KEYS } from '@utils/configuration.validator';

@Injectable()
export class StripeService implements CheckoutRepository {
  stripe: Stripe;

  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get(ENV_KEYS['STRIPE_KEY']));
  }

  async generateCheckoutSession(
    priceId: string,
  ): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    const session = await this.stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: 'http://localhost:3000/',
      cancel_url: 'http://localhost:3000/painel',
    });

    return session;
  }
}
