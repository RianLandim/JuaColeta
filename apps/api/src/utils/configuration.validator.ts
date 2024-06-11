import { z } from 'zod';

export const configurationValidationSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  DATABASE_URL: z.string(),
  SECRET: z.string(),
  MAP_BOX_KEY: z.string(),
  MAP_BOX_URL: z.string().url(),
  S3_REGION: z.string(),
  S3_ACCESS_KEY_ID: z.string(),
  S3_SECRET_ACCESS_KEY: z.string(),
  S3_BUCKET: z.string(),
  MINIO_URL: z.string().url(),
  MAILER_USER: z.undefined(),
  MAILER_PASS: z.undefined(),
  RESEND_KEY: z.string(),
});

export type ConfigurationProps = z.infer<typeof configurationValidationSchema>;
