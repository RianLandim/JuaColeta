import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
  name: z.string().min(1),
  license: z.string().nullish(),
  cellphone: z.string(),
  role: z.enum(['ADMIN', 'COMPANY_ADMIN', 'DRIVER']),
});

export class CreateUserDto extends createZodDto(createUserSchema) {}
