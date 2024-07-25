import { z } from "zod";

export const createBillingValidator = z.object({
  dueIn: z.number(),
  status: z.string(),
  companyId: z.string(),
  priceId: z.string(),
});

export type CreateBilling = z.infer<typeof createBillingValidator>;
