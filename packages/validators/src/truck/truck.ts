import { z } from "zod";

export const truckValidator = z.object({
  id: z.string(),
  model: z.string(),
  fabricator: z.string(),
  plate: z.string(),
  color: z.string(),
  year: z.string(),
  renavam: z.string(),
  category: z.enum(["A", "B", "C", "D", "E"]),
  averageConsume: z.number().nullish(),
  capacity: z.number().nullish(),
  isSecured: z.boolean(),
  companyId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type TruckValidatorProps = z.infer<typeof truckValidator>;
