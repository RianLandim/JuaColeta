import { z } from "zod";

export const userRoles = z.enum(["ADMIN", "COMPANY_ADMIN", "DRIVER", "CLIENT"]);

export const userValidator = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  cellphone: z.string(),
  license: z.string().nullish(),
  role: userRoles,
  createdAt: z.coerce.date(),
});

export type UserRoles = z.infer<typeof userRoles>;

export type UserValidator = z.infer<typeof userValidator>;
