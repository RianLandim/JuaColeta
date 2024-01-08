import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const createCompanySchema = z.object({
  socialName: z.string(),
  cnpj: z.string(),
  address: z.object({
    number: z.number(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    district: z.string(),
    zipCode: z.string(),
  }),
});

export class CreateCompanyDto extends createZodDto(createCompanySchema) {}
