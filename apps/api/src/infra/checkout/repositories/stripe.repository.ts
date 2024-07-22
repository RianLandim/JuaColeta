import Stripe from 'stripe';

export abstract class CheckoutRepository {
  abstract generateCheckoutSession(
    priceId: string,
  ): Promise<Stripe.Response<Stripe.Checkout.Session>>;
}
