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
  MINIO_URL: z.string(),
  MAILER_USER: z.undefined().or(z.string()),
  MAILER_PASS: z.undefined().or(z.string()),
  RESEND_KEY: z.string(),
  STRIPE_KEY: z.string(),
});

export type ConfigurationProps = z.infer<typeof configurationValidationSchema>;

export enum ENV_KEYS {
  NODE_ENV = 'NODE_ENV',
  DATABASE_URL = 'DATABASE_URL',
  SECRET = 'SECRET',
  MAP_BOX_KEY = 'MAP_BOX_KEY',
  MAP_BOX_URL = 'MAP_BOX_URL',
  S3_REGION = 'S3_REGION',
  S3_ACCESS_KEY_ID = 'S3_ACCESS_KEY_ID',
  S3_SECRET_ACCESS_KEY = 'S3_SECRET_ACCESS_KEY',
  S3_BUCKET = 'S3_BUCKET',
  MINIO_URL = 'MINIO_URL',
  MAILER_USER = 'MAILER_USER',
  MAILER_PASS = 'MAILER_PASS',
  RESEND_KEY = 'RESEND_KEY',
  STRIPE_KEY = 'STRIPE_KEY',
}
