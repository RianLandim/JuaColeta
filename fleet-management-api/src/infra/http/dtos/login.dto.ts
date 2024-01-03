import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const loginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});

export class LoginDTO extends createZodDto(loginSchema) {}
