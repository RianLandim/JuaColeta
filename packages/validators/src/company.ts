import { z } from "zod";

export const companyValidator = z.object({
  id: z.string(),
  cnpj: z.string(),
  socialName: z.string(),
  address: z.object({
    id: z.string(),
    number: z.number(),
    street: z.string(),
    district: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    zipCode: z.string(),
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Company = z.infer<typeof companyValidator>;

export const address = z.object({
  number: z.number(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  district: z.string(),
  zipCode: z.string(),
});

export const createCompanyValidator = z.object({
  socialName: z.string(),
  cnpj: z.string(),
  address,
});

export type CreateCompany = z.infer<typeof createCompanyValidator>;
