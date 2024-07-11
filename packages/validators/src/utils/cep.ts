import { z } from "zod";

export const cepValidator = z.object({
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  neighborhood: z.string().nullish(),
  street: z.string().nullish(),
  location: z
    .object({
      type: z.string(),
      coordinates: z
        .object({
          longitude: z.string(),
          latitude: z.string(),
        })
        .optional(),
    })
    .optional(),
});
