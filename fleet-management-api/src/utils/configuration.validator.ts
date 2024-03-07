import { z } from 'zod';

export const configurationValidationSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  DATABASE_URL: z.string(),
  SECRET: z.string(),
  MAP_BOX_KEY: z.string(),
  MAP_BOX_URL: z.string().url(),
  MAILER_USER:
    process.env.NODE_ENV === 'development' ? z.string() : z.undefined(),
  MAILER_PASS:
    process.env.NODE_ENV === 'development' ? z.string() : z.undefined(),
});

export type ConfigurationProps = z.infer<typeof configurationValidationSchema>;
