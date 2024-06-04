import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { configurationValidationSchema } from '@utils/configuration.validator';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => configurationValidationSchema.parse(config),
    }),
    HttpModule,
    DatabaseModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
