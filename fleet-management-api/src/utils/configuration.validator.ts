import { z } from 'zod';

export const configurationValidationSchema = z.object({
  DATABASE_URL: z.string(),
  SECRET: z.string(),
  MAP_BOX_KEY: z.string(),
  MAP_BOX_URL: z.string().url(),
  MAILER_USER: z.string(),
  MAILER_PASS: z.string(),
});
